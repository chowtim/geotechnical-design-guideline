# Study note verification map

Read this index, then use the feature file for the journey. One proof of the jump bar does not cover the other procedures.

## Baseline preconditions

- Launch the note with the command in `../SKILL.md` and a port written to `run/server.json`.
- Doctor must pass before any click.
- Drive only that server.
- The page is the draft transcription. Do not add a factor of safety to make a journey pass.

## Driving conventions

- Start from `http://127.0.0.1:<port>/` with no hash, unless the feature says otherwise.
- Use the accessible name. The procedure links also carry `data-procedure`.
- Keep the link names as written. `ELS` is the label. Do not search for a longer title in the bar.

## Proof and skip reporting

- Record the click and the landing. A screenshot of the landing alone is not the proof.
- State the feature id and the entry point in the evidence file.
- If a path cannot be reached, write the command you tried and the missing precondition. Do not mark it passed through another path.

## Feature entry contract

Each feature file has one opening paragraph, then these headings in order.

1. `Sub-features`
2. `How to get to it (user POV)`
3. `Driving it with the Cursor browser`
4. `Gotchas`

## Features

- [Jump bar](./jump-bar.md) opens Desk study, ELS, or Soil nail design from the sticky bar.
- [Desk study](./desk-study.md) reads the desk-study procedure and its section links.
- [ELS](./els.md) reads the excavation and lateral support checks.
- [Soil nail design](./slope-upgrading.md) reads the soil nail procedure. The bar id is `soil-nail`.
