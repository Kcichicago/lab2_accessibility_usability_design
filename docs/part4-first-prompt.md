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
