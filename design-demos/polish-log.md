# Polish log · direction round (six candidates)

Capture route: `chrome-headless-shell` (Playwright's cached headless shell) at 1440×900, since
Python Playwright is not installed on this machine. huashu's `polish.py thumbs/shot` and
`design_lint check/compare` therefore skipped themselves; visual inspection was done by hand on
the same-size PNGs. Recorded here so the skip is visible, not silent.

## dir-a-rail.html (Emission-Line Rail — assigned)
Round 1, three worst things:
1. Vertical role labels ran up through the header meta line and were clipped at the plate top.
   → labels moved below the rail, horizontal, mono 11.5px.
2. Year ticks sat on the same baseline as the role labels; text collided ("JUN–AUG 2022" over
   "DYNATA"). → years lifted to their own row above the rail, labels offset per line.
3. Dead band between the spectral lines and the open plate. → plate raised to 404px and the
   seven-wavelength legend placed in the gap so the quiet space carries information.
Also removed an invented availability claim ("available for consulting conversations",
"+57 replies within a day") that PRODUCT.md forbids; replaced with location only.

## dir-b-welllog.html (Well-Log Section — pick)
Round 1:
1. Header contact line was struck through by the sheet rule and unreadable. → sheet height 132→158px,
   contact given its own line-height block clear of the border.
2. Depth-axis years all bunched at the top, so the measurement spine read broken. → flex-distributed
   2025→2022 down the full column, grid step widened to 46px.
3. The three trace boxes were empty frames with hatch fill = placeholder, not data. → each trace is
   now a drawn polyline (red time-series, black matching load, blue stepped event pulses); lower right
   dead space filled with a real "measured range" block computed from the CV dates.

## dir-c-logcolumn.html (Changelog Column)
Round 1: gutter footer note floated in empty space at the bottom → joined the flow under the status
block; the two future sections clip at 900px by design (page continues on scroll) — left as-is.

## dir-d / dir-e / dir-f
Single-pass sketches for the backup slots; not built out to full pages this round.
