# Jump bar

The sticky bar opens Desk study, ELS, or Soil nail design in one action. The heading of that procedure stays visible under the bar.

## Sub-features

- `jump-desk` opens Desk study from the bar.
- `jump-els` opens ELS from the bar.
- `jump-slope` opens Soil nail design from the bar.

## How to get to it (user POV)

- Load the note with no hash. The bar is at the top.
- Choose `Desk study`, `ELS`, or `Soil nail design` in that bar.
- The same three links stay on screen after the page moves.

## Driving it with the Cursor browser

Preconditions:

- Doctor passed for the server in `run/server.json`.
- The address has no hash.

- **Open ELS.** Choose `ELS`. Click the link named `ELS` whose attribute `data-procedure` is `els`. The hash is `#els`. The heading `2. Design of Excavation and Lateral Support (ELS) Works` is on screen. Its top is at or below the bottom of the sticky bar. The `ELS` link has `aria-current="true"`.
- **Open Desk study.** Choose `Desk study`. Click `a[data-procedure="desk-study"]`. The hash is `#desk-study`. The heading `1. Desk study` is below the bar. That link is current.
- **Open Soil nail design.** Choose `Soil nail design`. Click `a[data-procedure="soil-nail"]`. The hash is `#soil-nail`. The heading starts with `3. Soil nail design`. That link is current.
- **Proof.** Save the hash, the heading text, the heading top, the bar bottom, and the current link name. Save a screenshot of the landing. Put both in `../evidence/` with the feature id `jump-bar` and the entry point you used.

## Gotchas

- A heading hidden under the bar is a failure even if the hash is correct.
- `Good practice` is a text link in the same bar. It is not one of the three procedure jumps.
- The in-procedure links further down the page are a different entry. Do not count one of those as the bar jump.
- Browser cache can keep an older stylesheet. Load the page after the files on disk have changed.
