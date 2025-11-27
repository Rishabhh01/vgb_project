# VGB Project — vgb_website

A full-stack MERN website (Vishwa Guru Bharat) including client (React + Vite) and server (Node/Express + MongoDB), with membership, donation, and event features.

This repository contains a single project directory `vgb_website/` which holds the client, server, and helper scripts. For a deeper developer reference, see `vgb_website/README.md` which contains per-app docs and debugging notes.

---

## 🚀 Quick start

Clone the repository and install dependencies (run from the repository root):

```powershell
git clone https://github.com/Rishabhh01/vgb_project.git
cd vgb_project

# Install deps for server & client (single command provided in package.json)
npm run install-deps
```

Run the full development environment (server + client):

```powershell
# from repository root
npm run dev

# server runs on port 5012 by default
# client runs on Vite default port (5173) or configured port
```

If you prefer to run individually:

```powershell
cd vgb_website/server
npm run dev         # server

cd ../client
npm run dev         # client
```

---

## 📁 Repository layout

- vgb_website/
  - client/        — React + Vite frontend
  - server/        — Express API and business logic
  - scripts/       — helper/test scripts (e.g., e2e-auth-test)

---

## 🔧 Environment variables

Create `.env` files where appropriate (server uses `server/.env`, client uses `client/.env`) — ensure you DO NOT commit secrets.

Server (recommended):
- MONGO_URI            — MongoDB connection string (optional in development; server will use in-memory DB)
- JWT_SECRET           — JSON Web Token secret
- EMAIL_USER           — email account used by Nodemailer
- EMAIL_PASS           — password / app password for email
- CLIENT_URL           — front-end URL to allowlist for CORS (e.g. http://localhost:5173)
- RAZORPAY_KEY_ID      — Razorpay key id for payments
- RAZORPAY_KEY_SECRET  — Razorpay key secret for server-side verification
- STRIPE_SECRET_KEY    — (if using Stripe server functions)
- PORT                 — (optional) the port for the server (default: 5012)

Client (example .env values in `client/.env.example`):
- VITE_API_URL         — API base URL (e.g. http://localhost:5012)
- VITE_RAZORPAY_KEY_ID — Razorpay publishable key for client-side checkout

---

## 🧰 Features

- Authentication (register, email verification, login, password reset)
- Membership management (upgrade options, digital membership cards)
- Donation & payment integration with Razorpay (and some Stripe support)
- Event calendar and event registration
- Admin and basic content pages

---

## 📦 Deployment

This repository includes `vercel.json` and is set up to be deployed easily to Vercel for the client. The server can be deployed to a Node-compatible host (Render, Heroku, VPS, or dedicated server) with environment variables configured.

Notes:
- In production, set `MONGO_URI` to a real MongoDB server and never fallback to the in-memory DB.
- Keep secrets out of Git by using environment variables in the hosting provider.

---

## 🧪 Tests & Debugging

There’s a small helper script for developer testing: `npm run e2e-auth-test` (runs `scripts/e2e-auth-test.js`) which attempts a full auth flow using a local server or DB. Use carefully — intended for dev.

---

## 🤝 Contributing

Contributions are welcome — open an issue or a PR. Please follow these steps:

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Make changes and add tests/worked examples
4. Submit a pull request

---

