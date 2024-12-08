<div align="center">
    <img src=".github/logo.svg" alt="DT Money" />
    <p>Simplified version of the financial dashboard</p>
</div>

<img src=".github/cover.png" alt="DT Money" />

## 💻 Overview
Simplified version of the financial dashboard that has public home page, login page, dashboard pages that are protected by authentication and the ability for users to add, edit, and delete invoices.

## ✅ Features

- [x] 🏠 Public Home Page: Overview of the application and navigation to login page
- [x] 🔑 Login Page: Secure login for users to access dashboard features
- [x] 📊 Dashboard Pages: Protected pages displaying financial data and statistics
- [x] 📝 Invoice Management: Add, edit, and delete invoices

## 👉 Run project

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (LTS version recommended)
- pnpm

#### Setup and Run

1. Clone the Repository

```bash
$ git clone https://github.com/KassiaMabily/dt-money
$ cd dt-money
```

2. Environment Variables

Import your GitHub repository inside Vercel.

**Create a Postgres database**: Inside your project into vercel, select the Storage tab from your project dashboard. Select Create Database. 
Depending on when your Vercel account was created, you may see the following options: Postgres (Powered by Neon), Neon, or Supabase. 
Choose your preferred provider and click Continue. Once connected, navigate to the ``.env.local`` tab, click Show secret and Copy Snippet. Make sure you reveal the secrets before copying them.

**Generate a secret key**:  This key is used to encrypt cookies, ensuring the security of user sessions. You can do this by running the following command in your terminal:

```bash
$ openssl rand -base64 32
```

3. Setting Up the Frontend (Next.js)

```bash
# Install dependencies
$ pnpm install

# Start the development server
$ pnpm run dev
```

## API Endpoints

### Authentication
- POST /login - Log in and receive a JWT token

### Dashboard
- GET /dashboard - Access the dashboard (protected route)

### Invoices
- GET /invoices - Get a list of invoices (protected route)
- POST /invoices - Add a new invoice (protected route)
- PUT /invoices/:id - Edit an existing invoice (protected route)
- DELETE /invoices/:id - Delete an invoice (protected route)
