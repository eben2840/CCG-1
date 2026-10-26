<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Use shared site chrome in the root route and distinct leaf routes for each main content section so navigation and page metadata remain consistent.
- Keep consulting content in a shared browser-safe module so service descriptions stay consistent across pages.
- Contact enquiries open a prefilled email draft; never show an enquiry as sent without a delivery service.

- Keep the service, industry, insight, and careers experiences in focused page modules with shared search, filter, and cover primitives to avoid coupling unrelated page flows.
- Publish careers listings only from confirmed entries in the typed vacancies collection; an empty collection must render an availability state instead of sample jobs.
- Serve insight articles through a dynamic leaf route with article-specific metadata and a not-found guard so perspectives have shareable URLs.
- Keep the contact enquiry form and About work-process interaction in focused browser-safe page modules so their presentation can evolve without coupling page flows.
