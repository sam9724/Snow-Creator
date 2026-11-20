# Snow Creator Studio validation

## Automated checks

Ran Node syntax checks for the entrypoint and engine. `npm test` passed all nine tests: pooled particle bounds, never-melt retention, gradual melt, surface collision, precipitation volume at different visual budgets, reset, preset/random ranges, valid scene cloning, and malformed scene rejection.

## Browser checks

Live Chrome preview checks verified coordinated presets, immediate slider updates, text editing, scene creation, named-scene gallery, saved-scene reopening, and draft recovery after reload. A reload bug and a named-scene/draft write timing issue were found and fixed. PNG export was downloaded and inspected: valid PNG, 1280 × 800. Video recording produces a downloadable VP9 WebM; its recorder now explicitly requests frames while recording instead of relying on the preview render cadence.

PNG upload is implemented but its automated file-picker check stalled in the browser environment; successful end-to-end upload is not claimed. JSON validation is covered by unit tests; the browser import picker still needs manual verification. Responsive layouts are implemented at 1100/780/480 px, but real-phone checks remain outstanding. Native fullscreen was unavailable in the cloud preview. Verified that the in-page fallback opens and exposes an Exit presentation control. Native fullscreen remains available in browsers that permit it.

## Release scope

Private review build. The app processes files and stores scenes locally. There is no server-side purchase verification, customer account/entitlement system, payment processing, or cross-device scene sync. A $9.99 commercial launch requires those account/payment choices and a production browser/device test pass. No customer price acceptance or guaranteed CPU/memory/frame-rate claim is made.

The final video export was inspected with ffprobe: VP9 WebM, 1280 × 800, duration 10.067944 seconds, 3,495,228 bytes. Named-scene save followed by reload restored the saved scene name and settings.
