# AI LOG

Name: Kcichicago

## My AI setup

- Tool and where it runs: GitHub Copilot Chat in VS Code (editor) 
- Version or model, if shown: Copilot Fusion (gpt-6-luna)
- Project context file name and location: `.github/copilot-instructions.md`
- Did the tool correctly list and describe my project files on the first try? What did I fix? 
The files were listed correctly but .DS_Store was described as part of the project.

## Prompt log (at least 6)

| # | Where I used it (file or part) | My prompt | What the AI returned (short summary) | What I did (kept, changed, rejected) and why |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |
| 6 | | | | |

## Problems I found in the AI booking form (at least 3)

| # | Problem | How I found it (tool, test, or reading the diff) | Fixed by hand or by follow up prompt |
|---|---|---|---|
| 1 | The success message stayed on screen after I edited a field, so "Request received" sat beside details that were never sent. | Manual test in Chrome. A second AI review (Claude) pointed me to it, and I reproduced it before fixing. | Follow up prompt to Copilot. It worked on the first try. |
| 2 | The form accepted `a@b` as an email, although its own error text asks for an address like name@example.com. | Manual test in Chrome, after the same review flagged line 74 of `booking.js`. | Follow up prompt to Copilot. It worked on the first try. |
| 3 | After a valid submit the fields stayed filled, and a second press of the button sent the same request again with no change on screen. | Manual test in Chrome, prompted by the same review. | Follow up prompt to Copilot. It worked on the first try. |

## A time the AI was wrong or unhelpful

What happened, and how I caught it:
Copilot ended its reply by stating that no checklist item appeared unimplemented, and the validator, Lighthouse and WAVE all agreed with it. Three faults still turned up once I used the form by hand: a stale success message, an email check that accepted `a@b`, and a button that sent the same request twice. A clean report from the tool, and from the AI that wrote the code, did not mean the form behaved correctly.

My first prompt also contained a mistake of mine. Under "Acceptance criteria" I pasted four rows of the README's topic table in place of requirements 18 to 22, and Copilot built the page without questioning text that plainly was not a list of criteria. I caught it when I reread the saved prompt in `docs/part4-first-prompt.md`.

Note on the history: the first `AI draft: booking form` commit (9:34 pm) holds two empty files. Copilot's edits were discarded before I committed, so I sent the prompt again and committed the new draft under the same message at 9:49 pm.

