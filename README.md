# @n8n-dev/n8n-nodes-yodlee

![yodlee Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-yodlee.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-yodlee)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing yodlee API integrations by hand.**

Every time you connect n8n to yodlee, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to yodlee took 5 minutes, not half a day?**

This node gives you **15+ resources** out of the box: **Accounts**, **Auth**, **Cobrand**, **Configs**, **Data Extracts**, and 10 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-yodlee
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-yodlee`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **yodlee API** → paste your API key
3. Drag the **yodlee** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Accounts | Get accounts, Post add manual account, Post evaluate address, Get historical balances, Delete account, Get account details, Put update account |
| Auth | Get api keys, Post generate api key, Delete api key, Delete token, Post generate access token |
| Cobrand | Post cobrand login, Post cobrand logout |
| Configs | Get subscribed notification events, Delete notification subscription, Post subscribe for notification event, Put update notification subscription, Get public key |
| Data Extracts | Get events, Get userdata |
| Derived | Get holding summary, Get networth summary, Get transaction summary |
| Documents | Get documents, Delete document, Get download a document |
| Holdings | Get holdings, Get asset classification list, Get holding type list, Get security details |
| Provider Accounts | Get provider accounts, Put update account, Get user profile details, Delete provider account, Get provider account details, Put update preferences |
| Providers | Get providers, Get providers count, Get provider details |
| Statements | Get statements |
| Transactions | Get transactions, Get transaction category list, Post create category, Put update category, Post create or run transaction categorization rule, Delete transaction categorization rule, Post run transaction categorization rule, Put update transaction categorization rule, Get transaction categorization rules, Delete category, Get transactions count, Put update transaction |
| User | Get user details, Put update user details, Get access tokens, Post user logout, Post register user, Post saml login, Delete user |
| Verification | Get verification status, Post initiaite matching service and challenge deposit, Put verify challenge deposit |
| Verify Account | Post verify accounts using transactions |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from yodlee docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official yodlee OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **yodlee** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the yodlee API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
