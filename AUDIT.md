# AUDIT

Name: Kcichicago

## Baseline (home.html before any changes)

Test setup: Google Chrome 158, MacBook Pro (Intel), maximized window at 100% zoom, tested at http://localhost:8000/home.html on November 15, 2026. Lighthouse run from Chrome DevTools in Navigation mode, Desktop device, Accessibility category only. WAVE run as the Chrome extension. HTML checked by file upload at validator.w3.org/nu.

Note: The starter `img` folder did not include the logo or background photo. `mpls_dog_logo.png` and `dog_bg.jpeg` were added from the professor's Fall 2025 template provided prior to testing.

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
| 1 | Pale text fails contrast across the page. I measured the header links (`#8ab4ff` on white) at 2.08:1, the white label on the orange "Request a Stay" button at 2.05:1, and the gray footer text (`#aaaaaa` on `#f4f4f4`) at 2.11:1. Because the cards use a see-through white panel over the dog photo, their text gets harder to read wherever the picture is light. | WebAIM Contrast Checker; WAVE flagged 6 very low contrast items; Lighthouse failed its contrast audit | Perceivable | 1.4.3 Contrast (Minimum) | High | Darken the text and link colors until each pair reaches 4.5:1, and make the card backgrounds nearly solid. |
| 2 | Neither image describes itself usefully. A screen reader announces the logo as "image" (`alt="image"`, line 15) and reads "paw print" three times for a graphic that is only decoration (line 29). | WAVE (suspicious alternative text); the source code | Perceivable | 1.1.1 Non-text Content | Medium | Name the business in the logo's `alt`, and give the paws an empty `alt` so assistive technology skips them. |
| 3 | Only a colored dot tells visitors whether the business is open. Friday shows a green dot with no times, and Saturday a red dot with no word such as "Closed" (lines 54 and 55). Anyone who cannot tell red from green learns nothing from either. | Looking at the Hours card; the source code | Perceivable | 1.4.1 Use of Color | High | State each day's status in words, and keep the dots as decoration only. |
| 4 | Headings skip levels, and the page has no `h1`. The site name sits in a plain `div` (line 26), the first two cards open with `h3`, the Price card drops straight to `h5`, and the Hours card uses `h2`. | Lighthouse (heading order); WAVE (missing first level heading, skipped heading level); validator, lines 33 and 40 | Perceivable | 1.3.1 Info and Relationships | Medium | Promote the site name to the single `h1`, use `h2` for every card title, and use `h3` for the two price labels. |
| 5 | Zooming or narrowing the window breaks the layout. At 200% the page keeps its 1000px width, which pushes "Hours" off the right edge and clips everything below the first card. In a 320px view, the browser shrinks the whole desktop layout to about a third of its size, leaving the text far too small to read. Even at normal zoom, the footer text disappeared when I used a shorter window. | 200% zoom test; DevTools Responsive mode at 320px; comparing two window heights | Perceivable | 1.4.10 Reflow; 1.4.4 Resize Text | High | Add a viewport meta tag, drop the fixed `min-width`, the fixed heights and `overflow: hidden`, and let the cards wrap. |
| 6 | While tabbing, I never saw where I was. No outline or highlight appeared on any link, so I had to read the address in the corner of the window to work out which one had focus. The stylesheet strips the outline from every element (styles.css, lines 16 to 18). | Keyboard test; the stylesheet | Operable | 2.4.7 Focus Visible | High | Delete that rule and add a thick, high-contrast `:focus-visible` outline. |
| 7 | Focus moves backward through the header. My first Tab landed on Hours, the second on Services and the third on Home, after which it jumped to "Click here." The three links carry `tabindex` values of 3, 2 and 1 (lines 17 to 19), the opposite of the order in which they appear. | Keyboard test; Lighthouse (tabindex greater than 0); WAVE (3 tabindex alerts) | Operable | 2.4.3 Focus Order | Medium | Remove all three `tabindex` attributes so that focus follows the reading order. |
| 8 | A keyboard user cannot request a stay. Tab passes over the "Request a Stay" control every time, because it is a `div` that listens only for a mouse click (line 28). | Keyboard test; WAVE (device dependent event handler) | Operable | 2.1.1 Keyboard | High | Swap the `div` for a real link to the booking page and style it as a button. |
| 9 | Nothing lets a keyboard user jump past the header. Each visit begins with the navigation links before the main content comes within reach. | Keyboard test; the source code | Operable | 2.4.1 Bypass Blocks | Low | Put a "Skip to main content" link first on the page and reveal it on focus. |
| 10 | The page never declares its language. With no `lang` attribute on the `<html>` tag (line 3), a screen reader has to guess how to pronounce the text. | Lighthouse; WAVE (language missing or invalid); validator warning | Understandable | 3.1.1 Language of Page | Medium | Add `lang="en"` to the opening `<html>` tag. |
| 11 | Visitors cannot finish basic tasks with the information given. Sunday does not appear in the hours at all, the footer says "Call us:" and then offers no number (line 62), and the link reading "Click here" gives no hint of where it leads (line 35). | Reading the page as a customer would; WAVE (suspicious link text) | Understandable | Clear and complete content; 2.4.4 Link Purpose (In Context) | High | List all seven days, add the phone number from the business facts, and rename the link to say what it opens. |
| 12 | The markup contains errors, and its ARIA attributes mislead assistive technology. The validator reported a stray `</li>` (line 41), a stray `</ul>` (line 44), two elements sharing `id="hours"` (lines 47 and 49) and an obsolete `<center>` tag (line 63). On top of that, `aria-hidden="true"` hides the entire hours list from screen readers, the button's `aria-label="click here"` contradicts its visible text, and a `div` borrows `role="main"` where a `<main>` element belongs. | W3C validator (5 errors); WAVE (4 ARIA items) | Robust | Valid markup (4.1.1 Parsing); 4.1.2 Name, Role, Value | High | Repair the stray tags and the duplicate `id`, switch to native `<header>`, `<nav>`, `<main>` and `<footer>`, and strip out the ARIA attributes. |

## ARIA notes (Part 2, step 13)

For each ARIA attribute you kept or added, explain why a native HTML element could not do the job. If you use none, say so.

The final home.html uses no ARIA. The starter page had five ARIA attributes, but they were removed because a native element does each job better:

- `role="main"` on a `div` became a `<main>` element.
- `role="button"` and `aria-label="click here"` on the "Request a Stay" `div` became a real link, whose visible text is its name.
- `aria-label="more"` on the "Click here" link went away once the link text described its destination.
- `aria-hidden="true"` on the hours list was removed, since it hid the hours from screen reader users. The hours now sit in a table.

**services.html (Part 3):** this page uses ARIA in three places, each for a job native HTML cannot do reliably.

- `role="status"` marks two message areas, one under the dates and one in the estimate. Both sit on the page, empty, from the start. When the script writes a message into one, a screen reader announces it without moving focus. The native `<output>` element comes closest, but it is meant for calculation results and screen readers announce it less consistently.
- `aria-describedby` links each date field to the error paragraph beneath it, so a screen reader reads the error along with the field's label. A `<label>` can name a field, but it cannot attach a second message that changes.
- `aria-invalid="true"` goes on a date field only while it has an error, and the script removes it once the error clears. HTML's built-in validity applies only to the browser's own validation, which this page replaces with its own wording.

Everything else is native HTML: checkboxes inside a `fieldset` with a `legend`, a `select`, `date` inputs, and real buttons and links.

**book.html (Part 4):** Copilot's draft uses ARIA in the same three ways as the services page, and I kept all three.

- `role="status"` marks the paragraph under the button. It is empty when the page loads, and the script writes the confirmation into it, so a screen reader announces the message while focus stays on the button.
- `aria-describedby` ties each of the five fields to its own error paragraph, which a `<label>` alone cannot do.
- `aria-invalid="true"` appears on a field only while it has an error. The page turns off the browser's own validation with `novalidate`, so the script has to report that state itself.

## Usability review of services.html

Task scenarios:

- Task A: Estimate the cost for a large dog for boarding and grooming.
- Task B: Find out if a stay from December 24, 2026 to December 26, 2026 is possible.
- Task C: You added Training by mistake. Remove only Training.

Findings (at least 6, at least 5 different heuristics):

| # | Task | Evidence (what happened) | Heuristic | Severity | Change to test |
|---|---|---|---|---|---|
| 1 | A and B. Success means choosing a large dog and two dates without guessing. | The Size menu offered S1, M2, L3 and XL4, so I guessed that L3 meant large, and "See chart" opened nothing. The date fields read "Date 1" and "Date 2," and the estimate sat under the heading "Kennel nights." | Match between system and the real world | Medium | Rename the sizes Small, Medium, Large and Extra large, and label the dates "Drop off date" and "Pick up date." |
| 2 | A. Success means knowing the price of each service and how the total was reached. | No price appeared on any service button until after I clicked it. The list then showed $75 and $60, while "Est." read $148.50, and nothing on the page accounted for the extra $13.50. | Recognition rather than recall | Medium | Show each price beside its service, and list the size charge as its own line above the total. |
| 3 | A. Success means each service counted once. | A second click on Grooming added it to the list again and raised the estimate to $214.50. The page accepted the duplicate without comment. | Error prevention | Medium | Replace the buttons with checkboxes, so a service is either on or off. |
| 4 | B. Success means learning what to correct when a date is missing or wrong. | With both dates empty, a pop-up read "Error 4012." With the dates reversed, it read "Error 4013: invalid range." Neither named the field or said what to do. | Help users recognize, diagnose, and recover from errors | High | Put a plain sentence under the field at fault, such as "Choose a drop off date." |
| 5 | B. Success means an answer about December 24 to 26. | After I entered both dates and pressed Go, a spinner turned for about two seconds and vanished. No message followed, so I never learned whether the stay was possible. Send did nothing at all. | Visibility of system status | High | Replace the spinner with a sentence that states the result. |
| 6 | C. Success means removing Training and keeping the rest. | No control removed a single service. Reset, the only option, emptied the entire estimate the moment I clicked it and asked nothing first. | User control and freedom | High | Add a remove control to each chosen service, and ask for confirmation before clearing everything. |
| 7 | All three. Success means seeing at once where to begin. | Three banners in capital letters filled the top of the page, and "CLICK HERE" led nowhere. Below them, Reset, Go and Send looked identical, so no single action stood out. | Aesthetic and minimalist design | Medium | Remove the banners and give one button the primary style. |

Design checklist for this page:

- Who is using this? Dog owners planning a stay, who want a rough price and want to know whether their dates work before they commit.
- What is the primary action? Requesting a stay, once the estimate looks right.
- What competes with it? On the original page, three promotional banners, a "CLICK HERE" link that led nowhere, and three look-alike buttons (Reset, Go and Send) all pulled attention away from it.

## Retest of services.html

| Task | Before (result) | After (result) |
|---|---|---|
| A | The estimate read $148.50, yet the list showed $75 and $60, which add up to $135, and nothing explained the gap. Finding "large" meant guessing among S1, M2, L3 and XL4, and "See chart" opened nothing. A second click on Grooming added it twice. | Ticking Boarding and Grooming and choosing "Large (adds 10%)" produced a breakdown: services $135.00, size $13.50, estimated total $148.50. A status line confirmed each choice, and a service can no longer be added twice. I completed the task by mouse and again by keyboard. |
| B | "Date 1" and "Date 2" gave no hint of which came first. With both empty, a pop-up read "Error 4012." After I entered December 24 and 26, a spinner turned for about two seconds and then nothing appeared, so the question went unanswered. | The fields now read "Drop off date" and "Pick up date." Checking with no dates put "Error: Choose a drop off date." under the field and moved focus there. With December 24 and 26 entered, a message reported a stay of 2 nights, confirmed the business is open on both days, and said to request a stay to confirm a spot. |
| C | No control removed a single service. Reset was the only option, and it emptied the whole estimate at once without asking. | "Remove Training" took Training off the estimate and left Boarding and Grooming in place, with the total updated. Unticking the Training box does the same. "Clear my estimate" now asks first and offers "No, keep my estimate." |

## Verification of book.html

| Check | Result |
|---|---|
| HTML validator errors | 0 errors and 0 warnings (Nu validator, file upload, after the fixes) |
| Lighthouse accessibility score | 100 (Chrome 158, Desktop, Accessibility only) |
| Keyboard test (notes) | Tab reaches the skip link, the three menu links, the five fields and the button, in that order. Each date field takes several presses, one per date part. Focus stays visible throughout. Pressing Enter on an empty form puts focus in Owner name. After a valid submit, focus stays on the button. |
| DevTools check of the status message container (what attribute did you see?) | `role="status"` on the paragraph with the id `booking-status`. It sits under the button, empty, before any submit. |

## After (home.html final)

| Check | Before | After |
|---|---|---|
| Lighthouse accessibility score | 84 | 100 |
| WAVE errors | 1 | 0 |
| WAVE contrast errors | 6 | 0 |
| HTML validator errors | 5 | 0 |
| Keyboard test | Four stops in reverse order, no visible focus, "Request a Stay" unreachable, no skip link | Seven stops in page order, starting with a skip link; a blue outline on every stop; "Request a Stay" reachable and opened with Enter |
| 200% zoom and 320px test | Sideways scrolling and clipped content at 200%; a shrunken desktop layout at 320px | No sideways scrolling and nothing cut off at 200%; at 320px the cards stack in one column with readable text |

## Before shipping checklist (all three pages)

- [x] Keyboard access works everywhere. Proof: Using only Tab, Shift+Tab, Enter and Space, I reached every link, field and button on all three pages, completed Tasks A, B and C on the services page, and sent a booking request.
- [x] Focus is always visible. Proof: A 3px dark blue outline appeared at every stop on all three pages, beginning with the skip link, and no rule in `styles.css` or `services.css` removes it.
- [x] Contrast passes. Proof: WAVE reported 0 contrast errors on each page, and the WebAIM checker gave 9.9:1 for heading text and 8.01:1 for the button label, both above 4.5:1.
- [x] Layout works on small screens. Proof: At 320px, 768px and 1280px in Chrome's device mode, and at 200% zoom, no page needed sideways scrolling and no text was cut off.
- [x] Feedback is meaningful (errors and success). Proof: On the services and booking pages each error appears beside its field, begins with "Error:" and says what to fix, while confirmations appear in `role="status"` areas without moving focus.

## One thing I had to check by hand that the tools did not catch

Manual checks determined that clicking "Hours" in the full-height window elicited no visible response, because the card was already displayed on the screen. Added an outline that appears around the card whenever the link points to it and changed it so that the information stands out against the photo. Lighthouse scored the page 100 both before and after, so scoring alone would never have indicated the problem.
