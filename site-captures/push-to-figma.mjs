#!/usr/bin/env node
import { WebSocket } from 'ws';
import { readFileSync } from 'fs';
import { join } from 'path';

const CHANNEL = 'h1dus1ws';
const WS_URL = 'ws://localhost:3055';
const SCREENSHOTS_DIR = '/Users/victorivanov/Documents/personal projects/oai-redesign/site-captures/screenshots';

// Mapping from Figma page names to screenshot files and frame IDs
const mapping = [
  { name: "Homepage", screenshot: "home.png", frameId: "2:2" },
  { name: "About", screenshot: "about.png", frameId: "2:3" },
  { name: "Program", screenshot: "program.png", frameId: "2:4" },
  { name: "Speakers", screenshot: "speakers.png", frameId: "2:5" },
  { name: "Talks", screenshot: "talks.png", frameId: "2:6" },
  { name: "Workshops 2026", screenshot: "workshops-2026.png", frameId: "2:7" },
  { name: "Event List", screenshot: "event-list.png", frameId: "2:8" },
  { name: "Track: Agent Retrieval", screenshot: "agent-retrieval.png", frameId: "2:9" },
  { name: "Track: AI Career", screenshot: "ai-career.png", frameId: "2:10" },
  { name: "Track: Context Engineering", screenshot: "context-engineering.png", frameId: "2:11" },
  { name: "Track: Master Agentic Coding", screenshot: "master-agentic-coding.png", frameId: "2:12" },
  { name: "Track: Model Parallelism", screenshot: "model-parallelism.png", frameId: "2:13" },
  { name: "Track: Multi-Agent", screenshot: "multi-agent.png", frameId: "2:14" },
  { name: "Track: OpenCLAW", screenshot: "openclaw.png", frameId: "2:15" },
  { name: "Track: Optimize LLM Performance", screenshot: "optimize-llm-performance.png", frameId: "2:16" },
  { name: "Track: Production Agents", screenshot: "production-agents.png", frameId: "2:17" },
  { name: "Track: RAG Systems", screenshot: "ragsystems.png", frameId: "2:18" },
  { name: "Track: Trustworthy Agents", screenshot: "trustworthy-agents.png", frameId: "2:19" },
  { name: "Event: OAI Conference 2026", screenshot: "event-2026.png", frameId: "2:20" },
  { name: "Event: Global Virtual", screenshot: "event-global-virtual.png", frameId: "2:21" },
  { name: "Event: Original", screenshot: "event-original.png", frameId: "2:22" },
  { name: "Call for Speakers", screenshot: "call-for-speakers.png", frameId: "2:23" },
  { name: "Code of Conduct", screenshot: "code-of-conduct.png", frameId: "2:24" },
  { name: "Contact Us", screenshot: "contact-us.png", frameId: "2:25" },
  { name: "Gallery", screenshot: "gallery.png", frameId: "2:26" },
  { name: "Payment Request", screenshot: "payment-request-page.png", frameId: "2:27" },
  { name: "Sign Up", screenshot: "sign-up.png", frameId: "2:28" },
  { name: "Archive: Home", screenshot: "home-archive.png", frameId: "2:29" },
  { name: "Archive: Home Copy", screenshot: "home-copy.png", frameId: "2:30" },
  { name: "Archive: Speakers", screenshot: "speakers-archive.png", frameId: "2:31" },
  { name: "Archive: Contact Old", screenshot: "contact-old.png", frameId: "2:32" },
  { name: "Archive: Contact Us Old", screenshot: "contact-us-old-1.png", frameId: "2:33" },
  { name: "Archive: Master Agents Old", screenshot: "master-agents-old.png", frameId: "2:34" },
];

function generateId() {
  return `img_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log(`Connecting to ${WS_URL}...`);

  const ws = new WebSocket(WS_URL);
  const pending = new Map();

  ws.on('message', (data) => {
    try {
      const msg = JSON.parse(data.toString());
      if (msg.id && pending.has(msg.id)) {
        pending.get(msg.id)(msg);
        pending.delete(msg.id);
      }
    } catch (e) {
      // ignore parse errors
    }
  });

  await new Promise((resolve, reject) => {
    ws.on('open', resolve);
    ws.on('error', reject);
  });

  console.log('Connected. Joining channel...');

  // Join channel
  ws.send(JSON.stringify({ type: 'join', channel: CHANNEL }));
  await sleep(1000);

  console.log(`Joined channel: ${CHANNEL}`);
  console.log(`Processing ${mapping.length} pages...\n`);

  let success = 0;
  let failed = 0;

  for (const entry of mapping) {
    const filePath = join(SCREENSHOTS_DIR, entry.screenshot);
    let imageData;

    try {
      const buffer = readFileSync(filePath);
      imageData = buffer.toString('base64');
    } catch (e) {
      console.log(`  SKIP ${entry.name}: file not found (${entry.screenshot})`);
      failed++;
      continue;
    }

    const fileSizeKB = Math.round(imageData.length * 3 / 4 / 1024);
    console.log(`  [${success + failed + 1}/${mapping.length}] ${entry.name} (${fileSizeKB}KB)...`);

    // Send set_image command
    const id = generateId();
    const promise = new Promise((resolve, reject) => {
      pending.set(id, resolve);
      setTimeout(() => {
        if (pending.has(id)) {
          pending.delete(id);
          reject(new Error('Timeout'));
        }
      }, 30000);
    });

    ws.send(JSON.stringify({
      id,
      type: 'message',
      channel: CHANNEL,
      message: {
        id,
        command: 'set_image',
        params: {
          nodeId: entry.frameId,
          imageData,
          scaleMode: 'FIT',
          commandId: id
        }
      }
    }));

    try {
      const result = await promise;
      if (result.error) {
        console.log(`    FAIL: ${result.error}`);
        failed++;
      } else {
        console.log(`    OK`);
        success++;
      }
    } catch (e) {
      console.log(`    FAIL: ${e.message}`);
      failed++;
    }

    // Small delay between images to avoid overwhelming Figma
    await sleep(500);
  }

  console.log(`\nDone! ${success} succeeded, ${failed} failed out of ${mapping.length} total.`);
  ws.close();
  process.exit(0);
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
