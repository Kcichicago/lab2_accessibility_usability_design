# Project context for AI tools

## Project

- Name: MPLS Dog Boarding website
- What it is: A small static website for a dog boarding business (home page, services page, booking request page)
- Who uses it: Dog owners looking for prices, hours, and a way to request a stay. Include people who use a keyboard only, people who zoom the page, and people on phones.
- My course and assignment: DIGH 403 / CPST 342 Intro to Web App Development, Lab 2 (accessibility, usability and design)

## Technology rules

- Plain HTML, CSS, and JavaScript only.
- No frameworks, no libraries, no build step, no new dependencies.
- Files live in the project root: home.html, services.html, book.html
- Shared styles go in `styles.css`. Use the CSS custom properties defined at the top of that file.
- Scripts: `services.js` for services.html and `booking.js` for book.html.
- `styles.css` already has classes for the skip link, header, menu, cards, buttons (`.btn`, `.btn-secondary`) and forms (`.field`, `.hint`, `.error`, `.status`). Reuse them before adding new rules.

## Accessibility rules (not negotiable)

- Use native HTML elements first. Add ARIA only when a native element cannot do the job, and explain why.
- Every form field has a visible, connected label. Placeholder text is never the only label.
- Normal text meets 4.5:1 contrast. Large text and UI components meet 3:1.
- Never remove the focus outline. Focus must always be visible.
- Never use color as the only way to show meaning.
- One `h1` per page and headings in order.
- Pages work at 320px wide and at 200% zoom.

## Style

- Plain, direct text for visitors.
- Match the existing header, navigation, and footer on every page.
- Add short comments where behavior is not obvious.
- Business facts (hours, phone, address) come from README.md. Do not invent others.

## How I want you to work

- Show me changes I can review before they are applied.
- Tell me what you are unsure about.
- Do not change files I did not ask you to change.
