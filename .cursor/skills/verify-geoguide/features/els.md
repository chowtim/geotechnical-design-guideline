# ELS

ELS is the excavation and lateral support procedure. It includes the minimum checks. Wall friction is taken from Geoguide 1 Tables 14 and 15.

## Sub-features

- `els-open` reaches the procedure from the bar.
- `els-uls` shows the ultimate-limit-state table.
- `els-friction` shows the wall-friction instruction in the design parameters.

## How to get to it (user POV)

- Choose `ELS` in the top bar.
- Choose `2.3 Ultimate limit state` for the factor table.
- Choose `2.2 Design parameters` for the wall-friction instruction.

## Driving it with the Cursor browser

Preconditions:

- Doctor passed.
- The note was opened with no hash.

- **Open ELS.** Choose `ELS`. Click `a[data-procedure="els"]`. The hash is `#els`. The heading `2. Design of Excavation and Lateral Support (ELS) Works` is below the bar. The `ELS` link is current.
- **Open the checks.** Choose `2.3 Ultimate limit state`. The hash is `#els-uls`. The table contains `Overturning and toe instability` and `1.5 in effective stress`.
- **Open the parameters.** Choose `2.2 Design parameters`. The hash is `#els-parameters`. The text names Geoguide 1 Tables 14 and 15. It does not state a wall-friction number of its own.
- **Proof.** Record the three hashes. Record one table cell and the wall-friction sentence. Finding the heading without the table does not prove the checks.

## Gotchas

- Do not add a wall-friction number. The page points to Geoguide 1 Tables 14 and 15.
- Temporary cut slopes follow PNAP APP-109 section 6. The page suggests 1.2 for most temporary cases. Do not treat that 1.2 as the toe-stability factor.
