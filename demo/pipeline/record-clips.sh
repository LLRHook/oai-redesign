#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
APP_DIR="$ROOT/oai-site"
CLIPS_DIR="$SCRIPT_DIR/clips"
SHOT_DIR="$SCRIPT_DIR/shots"
LOG_FILE="$SCRIPT_DIR/.dev-server.log"
SESSION="oai-demo"
SERVER_PID=""

cleanup() {
  agent-browser --session "$SESSION" close >/dev/null 2>&1 || true
  if [ -n "$SERVER_PID" ]; then
    kill "$SERVER_PID" >/dev/null 2>&1 || true
    wait "$SERVER_PID" 2>/dev/null || true
  fi
}
trap cleanup EXIT

if ! command -v agent-browser >/dev/null 2>&1; then
  echo "ERROR: agent-browser is required for web capture."
  exit 1
fi

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ERROR: ffmpeg is required for clip rendering."
  exit 1
fi

pick_port() {
  for p in "${PORT:-4321}" 4322 4323 4324; do
    if ! lsof -iTCP:"$p" -sTCP:LISTEN >/dev/null 2>&1; then
      echo "$p"
      return
    fi
  done
  echo "No available port found" >&2
  exit 1
}

PORT="$(pick_port)"
BASE_URL="http://127.0.0.1:${PORT}"

mkdir -p "$CLIPS_DIR" "$SHOT_DIR"
rm -f "$SHOT_DIR"/*.png "$SHOT_DIR"/*.snapshot.txt

echo "Starting OAI site on $BASE_URL"
(
  cd "$APP_DIR"
  npm run dev -- --host 127.0.0.1 --port "$PORT"
) >"$LOG_FILE" 2>&1 &
SERVER_PID="$!"

for _ in $(seq 1 40); do
  if curl -fsS "$BASE_URL" >/dev/null 2>&1; then
    break
  fi
  sleep 0.5
done

if ! curl -fsS "$BASE_URL" >/dev/null 2>&1; then
  echo "Dev server did not become ready. Log:"
  sed -n '1,120p' "$LOG_FILE"
  exit 1
fi

capture_route() {
  local id="$1"
  local route="$2"
  local seconds="$3"
  local shot="$SHOT_DIR/${id}.png"
  local url="${BASE_URL}${route}"

  echo "Capturing $url"
  agent-browser --session "$SESSION" open "$url"
  agent-browser --session "$SESSION" set viewport 1920 1080
  agent-browser --session "$SESSION" wait --load networkidle --timeout 10000 || agent-browser --session "$SESSION" wait 1200
  agent-browser --session "$SESSION" screenshot "$shot"
  agent-browser --session "$SESSION" snapshot -i > "$SHOT_DIR/${id}.snapshot.txt" || true

  ffmpeg -y -loglevel warning \
    -loop 1 -t "$seconds" -i "$shot" \
    -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,fps=30,format=yuv420p" \
    -an -c:v libx264 -crf 18 -preset medium \
    "$CLIPS_DIR/${id}.mp4"
}

capture_route "01-hero" "/" 5.2
capture_route "02-workshops" "/workshops" 5.8
capture_route "03-speakers" "/speakers" 5.8
capture_route "04-program" "/program" 5.8

echo "Recorded clips in $CLIPS_DIR"
