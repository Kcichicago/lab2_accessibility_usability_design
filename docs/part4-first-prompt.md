## First prompt (sent twice)

Goal: Create a "Request a stay" page for the MPLS Dog Boarding site: a new book.html with a booking request form, and a new booking.js that validates the form and simulates a successful submit.

Context: Read #file:home.html, #file:services.html, #file:services.js and #file:styles.css first. Copy the skip link, header, navigation and footer from home.html. Follow the form patterns already used in services.html. Use the CSS custom properties and existing classes in styles.css.

Constraints: Plain HTML, CSS and JavaScript. No frameworks, libraries, build step or downloaded scripts. Do not change home.html, services.html, services.css or services.js. If the form needs styles that styles.css lacks, add them to styles.css only. Do not remove focus outlines. Use native elements before ARIA, and explain any ARIA you add. No alert() or confirm() pop-ups.

Acceptance criteria:
| Access | POUR (Perceivable, Operable, Understandable, Robust), WCAG 2.2 Level A and AA, Section 508, color contrast ratios, semantic HTML before ARIA |
| Usability | Nielsen's 10 heuristics, Observe, Diagnose, Improve, the mini usability review (Task, Evidence, Heuristic) |
| Design | Purpose, hierarchy, consistency, focus, responsive layout, the design checklist (before styling, while designing, before shipping, after shipping) |
| AI in your editor | Giving an AI tool project context, writing a prompt with acceptance criteria, reviewing a diff, and checking the result |
Also meet every item in #file:docs/booking-requirements.md.

Output: Create book.html and booking.js, and show me any change to styles.css before applying it. Then list anything you were unsure about and any requirement you think is not fully met.

## Copilot's closing notes

Checks: Editor reports no errors; node --check and git diff --check pass. Browser checks covered required fields, invalid email, past/reversed/Sunday dates, successful submission, and a 320px-wide layout with no horizontal overflow. Measured text, field-border, and button contrasts exceed the specified thresholds.

Unverified: I did not perform a formal WCAG/Section 508 audit, screen-reader test, human usability study, or independent browser test at 200% zoom. No checklist item appears unimplemented, but those checks remain unverified. The backend request is intentionally simulated, as requested.

## Follow-up prompts

In #file:booking.js the success message stays on screen after a field is edited. Steps: submit a valid form, then change the email. "Request received" is still shown. Clear the status message as soon as any field is edited. Change booking.js only and nothing else in it.

In #file:booking.js the form accepts the email a@b. The error text asks for an email like name@example.com, so an address with no dot after the @ should be rejected with that same message. Keep type="email" in book.html. Change booking.js only and nothing else in it.

In #file:booking.js, after a valid submit, the fields stay filled and pressing the button again sends the same request a second time. After the success message appears, clear the five fields. Keep the success message visible and do not move focus. Change booking.js only and nothing else in it. Review which lines were changed.

In #file:booking.js, the success message does not say what was requested, and the form clears right after. Before the form resets, read the dog's name and both dates, and include them in the message, for example: "Request received for Rex, Tuesday, November 24 to Friday, November 27." Keep the rest of the message as it is. Write the dates in words, with the weekday, month and day. Insert the dog's name as text, not HTML. Change booking.js only. Tell me which lines you changed.

Goal: carry the dates a visitor checked on the services page into the booking form.

Context: Read #file:services.js, #file:services.html, #file:booking.js and #file:book.html. On the services page, "Check these dates" validates #dropoff and #pickup and writes a result into #date-status. The "Request a Stay" link is the a.btn inside the section with class "summary".

Constraints: Plain JavaScript. No storage, cookies or libraries. Do not change any HTML or CSS file. In services.js, after a successful date check, set that link's href to book.html?dropoff=YYYY-MM-DD&pickup=YYYY-MM-DD using the two field values. Set it back to book.html when a date check fails, when either date field is edited, and when the estimate is cleared. In booking.js, when the page loads and before the first call to updateDateMinimums(), read dropoff and pickup from the address with URLSearchParams. Use a value only if it matches four digits, a dash, two digits, a dash, two digits. Put it in the matching date field through its value property. Do not show errors on load and do not move focus. Change nothing else.

Acceptance criteria: book.html opened with no dates in the address behaves exactly as it does now. Values that are not dates are ignored. Past dates and Sundays still produce the existing errors when the form is sent. Tasks A, B and C on the services page still work.

Output: Show me each change before applying it. Then list anything you are unsure about.