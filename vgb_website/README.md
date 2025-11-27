

A modern, responsive website for my VGB foundation

## 🌟 Features

- **User Authentication** 
  - Secure login and registration system
  - Email verification
  - Password reset functionality
  - Profile management

- **Membership System**
  - Multiple membership tiers (Basic, Silver, Gold)
  - Digital membership cards
  - Membership upgrade options
  - Exclusive member benefits

- **Donation System**
  - Secure payment integration with Razorpay
  - Multiple donation options
  - Recurring donation support
  - Automated donation receipts

- **Event Management**
  - Interactive event calendar
  - Event registration
  - Event details and updates
  - PDF downloads for event information

- **Community Features**
  - Discussion forums
  - Chapter information
  - Volunteer opportunities
  - Community engagement tools

- **Content Management**
  - About Us sections
  - Initiative pages (Gau, Ganga, Gayatri, Gita, Guru)
  - Team information
  - News and updates

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router for navigation
- Styled Components for styling
- React Icons for icons
- Axios for API calls
- Context API for state management

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Nodemailer for email services
- Razorpay for payments

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/vgb_website.git
cd vgb_website
```

2. Install dependencies:
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Set up environment variables:
```bash
# Create .env file in server directory
cp .env.example .env

# Create .env file in client directory
cd ../client
cp .env.example .env
```

4. Start the development servers:
```bash
# Start server
cd server
npm run dev

# Start client
cd ../client
npm run dev
```

## 🔧 Configuration

-### Server Configuration
- Set up MongoDB connection string
  - If you don't have a MongoDB instance for local development, the server will now automatically start an in-memory MongoDB instance (using mongodb-memory-server) when `MONGO_URI` is not set and `NODE_ENV` !== `production`.
  - For production always provide a valid `MONGO_URI`.
- Configure email service credentials
- Set up Razorpay API keys
- Configure JWT secret

### Client Configuration
- Set API endpoint URLs
- Configure environment variables
- Set up payment gateway keys

## 📱 Pages

- Home
- About
  - Vision & Mission
  - Sankalp
  - Boards & Departments
  - Event Calendar
  - Who's Who
- Experience
- Community
- Donate
- Contact
- Team
- Membership
- Login/Register
- Profile

## 🎨 Design System

- **Colors**
  - Primary: #cd232e (VGB Red)
  - Secondary: #2b2928 (Dark Gray)
  - Accent: #D4AF37 (Gold)
  - Background: #f8f9fa

- **Typography**
  - Headings: Montserrat
  - Body: Open Sans
  - Special: Playfair Display

## 🔒 Security Features

- JWT-based authentication
- Password encryption
- Email verification
- Secure payment processing
- Input validation
- XSS protection
- CSRF protection

## 📧 Email Templates

- Welcome emails
- Verification emails
- Password reset emails
- Donation receipts
- Membership confirmations
- Event registrations


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email divyanshrohatgi@gmail.com

## 🧪 Developer: End-to-end auth test

I added a small helper script to run a local end-to-end test for the authentication flow (register → verify OTP → login → fetch profile).

Prerequisites:
- A running local dev server (server) and MongoDB reachable from `MONGO_URI`.
- Environment variable `MONGO_URI` must be set in your shell or `.env` in the project root.

Run from the project root:

```powershell
npm run e2e-auth-test
```

The script will create a unique test user, read the verification OTP from the database, verify the user, log in, and then fetch the profile. It prints the result or useful errors if anything fails. This is intended for development / debugging only.

Note: the script prefers to fetch the verification OTP via a development-only endpoint exposed by the server at `GET /api/users/_debug/otp?email=` (this endpoint is only enabled when NODE_ENV !== 'production'). This allows the test to work when the server is using the in-memory MongoDB fallback and avoids a direct DB connection requirement.
