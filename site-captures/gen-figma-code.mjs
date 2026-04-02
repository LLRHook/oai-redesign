// Generates the use_figma Plugin API code for a given image entry
// Usage: node gen-figma-code.mjs <index>
// Outputs the code string to stdout

import { readFileSync } from 'fs';

const data = JSON.parse(readFileSync('/Users/victorivanov/Documents/personal projects/oai-redesign/site-captures/image-data.json'));
const index = parseInt(process.argv[2]);

if (isNaN(index) || index < 0 || index >= data.length) {
  console.error(`Usage: node gen-figma-code.mjs <index 0-${data.length - 1}>`);
  process.exit(1);
}

const entry = data[index];

const code = `
const T="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function d(s){const r=[];for(let i=0;i<s.length;i+=4){const a=T.indexOf(s[i]),b=T.indexOf(s[i+1]),c=T.indexOf(s[i+2]),e=T.indexOf(s[i+3]);r.push((a<<2)|(b>>4));if(s[i+2]!=='=')r.push(((b&15)<<4)|(c>>2));if(s[i+3]!=='=')r.push(((c&3)<<6)|e);}return new Uint8Array(r);}
const b="${entry.b64}";
const bytes=d(b);
const img=figma.createImage(bytes);
const page=figma.root.children.find(p=>p.id==="${entry.pageId}");
if(!page)return JSON.stringify({error:"Page not found: ${entry.pageId}"});
await figma.setCurrentPageAsync(page);
const frame=page.findOne(n=>n.id==="${entry.frameId}");
if(!frame)return JSON.stringify({error:"Frame not found: ${entry.frameId}"});
frame.fills=[{type:'IMAGE',scaleMode:'FIT',imageHash:img.hash}];
return JSON.stringify({success:true,page:page.name,hash:img.hash});
`.trim();

console.log(JSON.stringify({ name: entry.name, codeLength: code.length, code }));
