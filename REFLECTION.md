# REFLECTION

Name: Kcichicago

Write about 400 to 500 words. Answer each question in your own words.

1. Which problem was hardest to notice, and why?

Problems of accessibility and device responsiveness can appear resolved at first glance but prove more intricate upon review. The hardest to notice was the Hours link on the home page. In a tall browser window the Hours card already sat on screen, so clicking the link produced no visible response, yet Lighthouse, WAVE and the validator all passed the page. I found the fault only by clicking through the site as a visitor would. Seeing what other users might encounter appears to be a skill cultivated over time.

2. Pick one change from your final work. Which POUR principle or heuristic does it support, and why did the old version fail?

The final services page replaces the labels "Date 1" and "Date 2" with "Drop off date" and "Pick up date," and plain messages beside each field take the place of pop-ups that read "Error 4012." This change supports Understandable, one of the four POUR principles. The old version failed because its labels and codes meant something only to whoever wrote them, which led visitors in circles instead of toward a successful request. Many potential clients could have gone elsewhere. Asking "Is it understandable now?" guided each later decision.

3. Describe one moment where the AI gave you something wrong, risky, or unhelpful. How did you catch it?

Copilot's first version of the booking form accepted `a@b` as an email address, although its own error text asked for an address like name@example.com. Every automated check had already cleared the page, and Copilot had reported that no checklist item appeared unimplemented. A second review flagged the email check, and I confirmed the fault by typing that address into the form in Chrome. AI output resembles GPS directions: usually right, yet the driver still has to watch the road.

4. How did your project context file and your prompt pattern change what the AI gave you?

The context file gave Copilot a clear instruction set: plain HTML, CSS and JavaScript, native elements before ARIA, and the classes already defined in `styles.css`. As a result, the draft reused those classes, added no new style rules and changed no other file. My prompt followed the pattern of Goal, Context, Constraints, Acceptance criteria and Output, and its final part asked Copilot to list what it was unsure about, which gave me a starting point for review. I learned quickly that the quality returned matches the care invested in the initial query.

5. Section 508 and WCAG are standards. Why is testing with real people and different tools still needed?

Standards provide guidelines, but good sites also require interactivity and intuitive responses. Lighthouse scored my booking page 100 while three faults remained, because automated tools examine code patterns and cannot judge whether a visitor can finish a task. Individuals with differing backgrounds and experience with technology reveal how a site functions in real time and under varying circumstances. I did not test with a screen reader or with outside users, so those limits remain. What tests well under simulated conditions often falls short in more realistic environs.

6. What is one question you now ask before you style any page?

Before composing a page, I now ask: what is the one action a visitor needs to complete here? Practice with these three pages showed that most errors began where that goal was unclear. Once I settle the primary action, I can judge which features lead a visitor toward it and which information a potential client still needs before proceeding.
