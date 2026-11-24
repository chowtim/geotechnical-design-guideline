---
name: verify-geoguide
description: Drive the local Hong Kong geotechnical study note in a browser. Use when checking the jump bar, Desk study, ELS, or Soil nail design, or when a change might hide a heading under the sticky bar.
---

# Verify the geotechnical study note

The surface is one static web page. There is no account, database, or build step. Two copies can run at once on different ports. Do not drive a server you did not start in this run.

## Launch

From the project root, pick a free port and start the note. Ready means the draft title is in the HTML, not merely that the process is alive.

```powershell
$port = 4174
$root = "C:\Users\chowtim\Cursor\Geotechnical Design Guideline"
New-Item -ItemType Directory -Force -Path "$root\.cursor\skills\verify-geoguide\run" | Out-Null
$proc = Start-Process -FilePath python -ArgumentList "-m","http.server",$port,"--bind","127.0.0.1" -WorkingDirectory $root -PassThru -WindowStyle Hidden
@{ pid = $proc.Id; port = $port; url = "http://127.0.0.1:$port/" } | ConvertTo-Json | Set-Content "$root\.cursor\skills\verify-geoguide\run\server.json"
```

Then request `http://127.0.0.1:4174/` and `http://127.0.0.1:4174/content/guide.js`. The page returns 200 and points at `content/guide.js`. The guide file contains the draft title and `id: "els"`. The procedure buttons are drawn by that script, so they are absent from the raw HTML. If the port is taken, change `$port` and the URL together and write that port into `server.json`.

Teardown is in Cleanup. Do not stop the process until evidence is written.

## Doctor

Read `run/server.json`. The check passes only when all of these are true.

- The recorded PID is still running.
- `GET` of the recorded URL returns status 200 and the body references `content/guide.js`.
- `GET` of `content/guide.js` on that same origin contains `Design Procedures for Desk Study` and `id: "els"`.
- The listener address is `127.0.0.1` and the recorded port.

If any line fails, do not drive the page.

## Drive

Use the Cursor browser. Prefer the accessible name and `data-procedure`. Do not click by coordinates.

The jump controls are links inside `nav[aria-label="Procedures"]`.

- Desk study is `a[data-procedure="desk-study"]`, name `Desk study`, hash `#desk-study`.
- ELS is `a[data-procedure="els"]`, name `ELS`, hash `#els`.
- Soil nail design is `a[data-procedure="soil-nail"]`, name `Soil nail design`, hash `#soil-nail`.

Open the recorded URL. Choose the link for the feature under test. The address hash matches that procedure. The procedure heading is fully below the sticky bar. The same link has `aria-current="true"`.

A heading whose top is above the bottom of `[data-bar]` is a failed jump.

## Evidence

Write proof under `.cursor/skills/verify-geoguide/evidence/`. Keep the feature id in the file name.

Each proof records the action and the result. For the jump, that is the link chosen, the hash after the click, the heading text, whether the heading sits below the bar, and which link is current. A screenshot of that landing belongs next to the note. The HTML of the page is the side effect. There is no database row and no message sent.

Do not treat a final screenshot with no before-action as proof.

## Cleanup

Stop only the PID in `run/server.json`. Delete `run/server.json` after the process has exited. Leave `evidence/` in place.

```powershell
$root = "C:\Users\chowtim\Cursor\Geotechnical Design Guideline"
$meta = Get-Content "$root\.cursor\skills\verify-geoguide\run\server.json" | ConvertFrom-Json
Stop-Process -Id $meta.pid -Force
Remove-Item "$root\.cursor\skills\verify-geoguide\run\server.json"
```

If `server.json` is already gone, do not guess a PID.

## Helpers

This skill has no separate script. The commands above are the helpers.
