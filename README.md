# VGB Project — vgb_website

A full-stack MERN website for the Vishwa Guru Bharat initiative: React + Vite frontend, Node/Express backend and MongoDB data store.

This repository stores the website in a single top-level folder `vgb_website/` containing the client, server, and helper scripts. This README focuses on the website features, how to run locally, and how to deploy to Render (recommended).

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


## 🔧 Environment variables

Create `.env` files where appropriate (server uses `vgb_website/server/.env`, client uses `vgb_website/client/.env`) — ensure you DO NOT commit secrets.

### Server (runtime — secure / secret)
- `MONGO_URI`            — MongoDB connection string (required in production)
- `JWT_SECRET`           — strong random secret for signing JWT
- `EMAIL_USER`           — SMTP username / sender email
- `EMAIL_PASS`           — SMTP password or app password (secret)
- `CLIENT_URL`           — Client origin (for CORS), e.g. https://your-client.onrender.com
- `RAZORPAY_KEY_ID`      — Razorpay key id (server)
- `RAZORPAY_KEY_SECRET`  — Razorpay key secret (server — secret)
- `STRIPE_SECRET_KEY`    — Stripe secret key (optional)
- `PORT`                 — optional (Render provides $PORT)

### Client (build-time — Vite uses VITE_ prefix, set BEFORE build)
- `VITE_API_URL`         — API base URL used by the front-end (e.g. https://your-server.onrender.com)
- `VITE_RAZORPAY_KEY_ID` — Razorpay publishable key (publishable; not secret)

Note: Vite embeds `VITE_*` variables at build time — ensure they are present in your hosting service before the build runs.

## 🧰 Website features (high level)

- Authentication & Users
  - Registration, email OTP verification, secure login, password reset
  - Profile and membership details

- Membership system
  - Tiered membership levels (Basic, Silver, Gold)
  - Membership upgrades and digital membership cards

- Payments & donations
  - Payment integration with Razorpay (client + server flow)
  - Donation receipts sent via email

- Events & community
  - Event calendar, event registration
  - Initiative pages, chapter info, and volunteer sections

- Administration & content
  - API endpoints to manage users & content

Developer-friendly extras:
- `mongodb-memory-server` fallback for local development when `MONGO_URI` is not provided
- `scripts/e2e-auth-test.js` for a quick end-to-end auth flow test (intended for development only)

## 📦 Deploying to production — recommended (Render)

This project is optimized to run with separate back-end and front-end services:

### Server — Render (Web Service)
- Root directory: `vgb_website/server`
- Build command: `npm install`
- Start command: `npm start`
- Set these *secret* environment variables in the Render Dashboard (Service → Environment):
  - MONGO_URI (MongoDB Atlas connection string)
  - JWT_SECRET
  - EMAIL_USER, EMAIL_PASS
  - RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET
  - STRIPE_SECRET_KEY (optional)
  - CLIENT_URL (after deploying client)

### Client — Render Static Site (or Vercel)
- Root directory: `vgb_website/client`
- Build command: `npm install && npm run build`
- Publish directory: `dist`
- Set these build-time environment variables BEFORE the first build:
  - VITE_API_URL (e.g., `https://your-server.onrender.com`)
  - VITE_RAZORPAY_KEY_ID (publishable key)

Tips:
- If you see "Publish directory dist does not exist", ensure `npm run build` runs and creates `dist`.
- Add the client URL to the server `CLIENT_URL` after the client deploys so CORS is allowed.
- Use secure env var storage in your host — never commit credentials to Git.

Local troubleshooting quick commands

If you'd like, I can add badges (build/deploy status), screenshots, a CONTRIBUTING.md, or a GitHub Actions/CICD workflow next.

## 📁 Repository layout

- vgb_website/
  - client/        — React + Vite frontend
  - server/        — Express API and business logic
  - scripts/       — helper/test scripts (e.g., e2e-auth-test)

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

