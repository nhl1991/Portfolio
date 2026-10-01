---
name: code-review
description: Review pull requests for this repository. Use this skill when reviewing code changes and pull requests.
---

# Code Review Guidelines

When reviewing code in this repository:

- Check TypeScript type safety.
- Avoid `any` unless absolutely necessary.
- Check for unnecessary client components.
- Prefer Server Components where appropriate.
- Check React hooks dependencies.
- Check accessibility, including aria attributes.
- Check error and loading states.
- Check for duplicated API requests.
- Check for security issues.
- Point out unnecessary complexity.

For tests:
- Check whether important behavior is covered.
- Prefer user-facing queries in React Testing Library.
- Avoid testing implementation details.

When reporting an issue:
1. Explain what is wrong.
2. Explain why it matters.
3. Suggest a concrete fix.