# Suggested Design Guideline

A non-official reading note for a young engineer in Hong Kong. The page transcribes `edited_Design Procedures for Various Geotechnical Works.docx`. It is not Geotechnical Engineering Office, Civil Engineering and Development Department, or Buildings Department guidance.

The three controls in the top bar open Desk study, ELS, and Soil nail design.

## Public page

https://chowtim.github.io/geotechnical-design-guideline/

## Open the note

From this folder, start a local server.

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173/`. The title of the draft appears at the top of the page.

You can also open `index.html` directly. The page uses plain scripts, so it does not need a build step.

## What the page will not do

Wall friction is taken from Geoguide 1 Tables 14 and 15. The page links to that document and does not restate a wall-friction value of its own.
