# Recording Guide - OAI Conference Demo

This workflow captures real local Astro routes with `agent-browser`, stores
screenshots in `demo/pipeline/shots/`, converts them into short clips, then
stitches the final 16:9 demo.

## Automated Capture

```bash
cd "/Users/victorivanov/Documents/personal projects/oai-redesign"
bash demo/pipeline/setup.sh
bash demo/pipeline/record-clips.sh
bash demo/pipeline/make-demo.sh
```

Expected output:

```text
demo/pipeline/output/oai-redesign-demo.mp4
demo/pipeline/output/preview.png
```

## Demo Arc

1. `01-hero.mp4` - Homepage hero: date, Atlanta location, practical value prop,
   and Register/View Program actions.
2. `02-workshops.mp4` - Workshop index: scannable hands-on sessions with speaker
   and topic context.
3. `03-speakers.mp4` - Speaker index: dense roster showing the event's depth.
4. `04-program.mp4` - Program page: schedule structure and decision-making
   details.

## Manual Capture Fallback

Run the app:

```bash
cd oai-site
npm run dev -- --host 127.0.0.1 --port 4321
```

Record a browser window at 1920x1080 and visit:

```text
/
/workshops
/speakers
/program
```

Name the recordings exactly as listed in the demo arc and place them in
`demo/pipeline/clips/`, then run `bash demo/pipeline/make-demo.sh`.

