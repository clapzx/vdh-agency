<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Git & deployment workflow

After completing any code change, always:
1. `git add` only the changed source files (never package-lock.json or test artefacts)
2. `git commit` with a concise message
3. `git push origin master` — this triggers the Vercel deployment automatically

Do this without asking the user for confirmation. The remote is `https://github.com/clapzx/vdh-agency.git`.
