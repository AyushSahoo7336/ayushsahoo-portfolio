## Problem

The current LeetCode fetch hits `leetcode-stats-api.herokuapp.com`, which is failing (`Failed to fetch` — Heroku free tier is deprecated). No live stats render.

## Fix (frontend only, no backend)

Swap the data source to a currently-working public LeetCode API, with a fallback so a single outage doesn't blank the section.

**Primary:** `https://leetcode-api-faisalshohag.vercel.app/AyushSahoo1`
Returns JSON: `totalSolved`, `easySolved`, `mediumSolved`, `hardSolved`, `ranking`, `totalQuestions`, etc. CORS-enabled, no key.

**Fallback:** `https://alfa-leetcode-api.onrender.com/AyushSahoo1/solved`
Returns `solvedProblem`, `easySolved`, `mediumSolved`, `hardSolved`.

### Changes

1. Update the LeetCode fetch hook/component (the one currently calling the Heroku URL) to:
   - Try the primary endpoint first.
   - On network error or non-OK response, try the fallback and map its fields to the same shape.
   - On both failing, keep the existing static values from `src/data/portfolio.ts` as the last resort so the UI never shows "broken".
2. Normalize the response into the shape the component already consumes (total solved, easy/medium/hard, ranking if available).
3. Keep the "Max Streak 300" and other static labels untouched — those aren't in the API.
4. No changes to styling, layout, or any other section.

### Technical notes

- Pure client-side `fetch` from the browser; both APIs send permissive CORS headers.
- Wrap in try/catch with an `AbortController` timeout (~6s) so a slow endpoint doesn't stall the section.
- Cache the successful response in `sessionStorage` for the tab session to avoid re-fetching on every mount.

No backend, no env vars, no new dependencies.