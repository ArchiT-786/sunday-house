# Sunday Houses site access administration

Dashboard: /admin/access

The implementation is committed with access controls OFF. It requires the following server-side environment variables to activate:

- SITE_ADMIN_EMAIL: authorized admin email
- SITE_ADMIN_PASSWORD_HASH: `salt:hex_scrypt_64_byte_hash` (not the plaintext password)
- SITE_ADMIN_SESSION_SECRET: random 32+ character secret
- SITE_ACCESS_GITHUB_TOKEN: fine-grained GitHub token with Contents read/write permission for ArchiT-786/sunday-house
- SITE_ACCESS_REPOSITORY: ArchiT-786/sunday-house (optional)

To generate a password hash locally, run:
```sh
node -e 'const c=require("node:crypto");const s=c.randomBytes(16).toString("hex");const p=process.argv[1];console.log(s+":"+c.scryptSync(p,s,64).toString("hex"))' 'YOUR_NEW_PASSWORD'
```
Use a NEW password rather than one previously sent in chat. Store all values in server-only deployment secrets. Never commit them.

The dashboard writes `site-access.json` on main using GitHub Contents API. The middleware reads it on each page request, so switches take effect without redeploying. The admin session uses a signed HttpOnly cookie. Admin APIs require authentication.

Note: GitHub is a simple configuration store rather than a low-latency database. Frequent public traffic can hit GitHub API limits; migrate to a managed KV store for production scale. GitHub updates create commits and can trigger deployment hooks. The maintenance screen remains public; static image URLs are not access-controlled by this middleware. IP restrictions protect pages, not already-public static files.

If settings storage fails while configured, the middleware returns 503 instead of exposing restricted pages. If not configured, access controls remain OFF. Do not enable restricted mode before confirming the whitelist includes your public IP. On Vercel, ensure the trusted client IP is passed as x-real-ip; do not trust arbitrary forwarded IP headers from untrusted proxies.
