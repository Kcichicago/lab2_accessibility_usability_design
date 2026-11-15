# AUDIT

Name: Kcichicago

## Baseline (home.html before any changes)

Test setup: Google Chrome 158, MacBook Pro (Intel), maximized window at 100% zoom, tested at http://localhost:8000/home.html on November 13, 2026. Lighthouse run from Chrome DevTools in Navigation mode, Desktop device, Accessibility category only. WAVE run as the Chrome extension. HTML checked by file upload at validator.w3.org/nu.

Note: The starter img folder does not possess the logo or background photo.  mpls_dog_logo.png and dog_bg.jpeg were added from the professor's Fall 2025 template prior to testing.

WAVE AIM Score at baseline: 5.9 out of 10.
WAVE also reported 1 feature (alternative text), 6 structural elements (one `h2`, two `h3`, two `h5`, one main content region, and no `h1`) and 4 ARIA items (2 ARIA labels, 1 ARIA button, 1 ARIA hidden).

| Check | Result |
|---|---|
| Lighthouse accessibility score | 84 |
| Lighthouse failed audits | 4 failed: (1) Background and foreground colors do not have a sufficient contrast ratio; (2) `<html>` element does not have a `[lang]` attribute; (3) Some elements have a `[tabindex]` value greater than 0; (4) Heading elements are not in a sequentially-descending order. Lighthouse listed 10 additional items to check manually. |
| WAVE errors | 1: Language missing or invalid (1) |
| WAVE contrast errors | 6: Very low contrast (6) |
| WAVE alerts | 9: Suspicious alternative text (1); Missing first level heading (1); Skipped heading level (1); Suspicious link text (1); Redundant link (1); Device dependent event handler (1); Tabindex (3) |
| HTML validator errors | 5 errors: (1) no `li` element in scope but a `li` end tag seen, line 41; (2) stray end tag `ul`, line 44; (3) duplicate ID `hours`, line 49; (4) the `center` element is obsolete, line 63; (5) heading `h5` follows `h3`, skipping a heading level, line 40. Also 3 warnings: no `lang` attribute on the `html` start tag, line 2; first occurrence of the duplicated ID `hours`, line 47; no heading with a computed level of 1, line 33. |
| Keyboard test (notes) | Reach: Tab stops on only four items (the three header links and "Click here"). "Request a Stay" never receives focus, so it cannot be reached or activated by keyboard. There is no skip link. Visibility: no focus outline appears on any stop, so I could not see which link was focused and had to rely on the address shown at the bottom of the window. Order: focus goes Hours, Services, Home, then "Click here", the reverse of the visual order in the header. Activation: Enter opens a focused link. Space does not activate links; it scrolls the page. |
| 200% zoom and 320px test (notes) | 200% zoom: the page stays about 1000px wide, so the header links are pushed toward the right edge, "Hours" is cut off, and sideways scrolling is needed. The page height is locked to the window, so the cards and footer below the first card are cut off at the bottom and cannot be scrolled to. 320px (DevTools Responsive, 320 x 831): the page does not reflow. It has no viewport meta tag, so it is drawn as the full desktop layout shrunk to about one third size, and the text is too small to read without zooming and scrolling sideways. Window height: in a normal window, the footer's "Call us:" and copyright lines were hidden at one window height and visible at another. |

Contrast pairs checked:

| Text color | Background color | Ratio | Pass or fail (4.5:1 normal, 3:1 large) |
|---|---|---|---|
| `#8ab4ff` (header links: Home, Services, Hours) | `#ffffff` (header) | 2.08:1 | Fail: normal-size text needs 4.5:1 |
| `#ffffff` ("Request a Stay" button text) | `#f5a25d` (button) | 2.05:1 | Fail: normal-size text needs 4.5:1 |
| `#aaaaaa` (footer text) | `#f4f4f4` (footer) | 2.11:1 | Fail: normal-size text needs 4.5:1 |

## Problems found on home.html (at least 8)

| # | What I saw (evidence) | Tool or test that showed it | POUR principle | WCAG idea | Severity | Planned fix |
|---|---|---|---|---|---|---|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |
| 6 | | | | | | |
| 7 | | | | | | |
| 8 | | | | | | |

## ARIA notes (Part 2, step 13)

For each ARIA attribute you kept or added, explain why a native HTML element could not do the job. If you use none, say so.

## Usability review of services.html

Task scenarios:

- Task A: Estimate the cost for a large dog for boarding and grooming.
- Task B: Find out if a stay from December 24, 2026 to December 26, 2026 is possible.
- Task C: You added Training by mistake. Remove only Training.

Findings (at least 6, at least 5 different heuristics):

| # | Task | Evidence (what happened) | Heuristic | Severity | Change to test |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |
| 6 | | | | | |

Design checklist for this page:

- Who is using this?
- What is the primary action?
- What competes with it?

## Retest of services.html

| Task | Before (result) | After (result) |
|---|---|---|
| A | | |
| B | | |
| C | | |

## Verification of book.html

| Check | Result |
|---|---|
| HTML validator errors | |
| Lighthouse accessibility score | |
| Keyboard test (notes) | |
| DevTools check of the status message container (what attribute did you see?) | |

## After (home.html final)

| Check | Before | After |
|---|---|---|
| Lighthouse accessibility score | | |
| WAVE errors | | |
| WAVE contrast errors | | |
| HTML validator errors | | |
| Keyboard test | | |
| 200% zoom and 320px test | | |

## Before shipping checklist (all three pages)

- [ ] Keyboard access works everywhere. Proof:
- [ ] Focus is always visible. Proof:
- [ ] Contrast passes. Proof:
- [ ] Layout works on small screens. Proof:
- [ ] Feedback is meaningful (errors and success). Proof:

## One thing I had to check by hand that the tools did not catch

