# 🛍️ Aaradhiya Trends & Styles – Full Stack E-Commerce Platform

_A modern, scalable fashion e-commerce application designed to provide a premium shopping experience using React, Next.js, Node.js, and Neon PostgreSQL._

---

## 📌 Table of Contents
- <a href="#overview">Overview</a>
- <a href="#business-problem">Business Problem</a>
- <a href="#core-features">Core Features</a>
- <a href="#tools--technologies">Tools & Technologies</a>
- <a href="#project-structure">Project Structure</a>
- <a href="#database-architecture">Database Architecture</a>
- <a href="#api--backend-design">API & Backend Design</a>
- <a href="#user-interface">User Interface</a>
- <a href="#how-to-run-this-project">How to Run This Project</a>
- <a href="#future-scope">Future Scope</a>
- <a href="#author--contact">Author & Contact</a>

---
<h2><a class="anchor" id="overview"></a>Overview</h2>

Aaradhiya Trends & Styles evaluates the intersection of premium fashion and smooth digital experiences. A complete full-stack pipeline was built using **React/Next.js** for an interactive frontend, **Node.js/Express** for robust backend API services, and **Prisma ORM with Neon PostgreSQL** for secure, serverless database management.

---
<h2><a class="anchor" id="business-problem"></a>Business Problem</h2>

Modern retail customers expect fast, intuitive, and secure online shopping experiences. This project aims to:
- Provide a responsive layout for browsing vast catalogs of men's and women's clothing.
- Implement a secure authentication system to protect user identities and passwords.
- Manage dynamic global state for Shopping Carts without losing data.
- Ensure order tracking and checkout integrations are reliably stored in a relational database.

---
<h2><a class="anchor" id="core-features"></a>Core Features</h2>

- **Secure Authentication:** JWT-based login and signup with bcrypt password hashing.
- **Dynamic Product Catalog:** Filterable views categorized by gender, season, and occasion.
- **Cart Management:** Real-time Context API cart updates perfectly synced with local storage.
- **Checkout Processing:** Multi-step checkout with address validation and mocked payment flows (COD, Card, UPI).
- **Profile Dashboard:** Persistent tracking of previous orders and account details mapped to the database.

---

<h2><a class="anchor" id="tools--technologies"></a>Tools & Technologies</h2>

- **Frontend:** HTML5 (JSX/TSX), Next.js (App Router), React, Tailwind CSS, Lucide React
- **Backend:** Node.js, Express.js, JSON Web Tokens (JWT), bcryptjs
- **Database & ORM:** PostgreSQL (Neon DB), Prisma ORM (v5.20)
- **State Management:** React Context API

---
<h2><a class="anchor" id="project-structure"></a>Project Structure</h2>

```text
aaradhiya-trends/
│
├── frontend/                   # Next.js React Application
│   ├── src/app/                # Page Routing (Home, Profile, Checkout, etc.)
│   ├── src/components/         # Reusable UI (CartDrawer, Header, ProductCard)
│   ├── src/context/            # Global State (AuthContext, CartContext)
│   └── src/config/             # Site metadata and static assets logic
│
├── backend/                    # Node.js Express API
│   ├── routes/                 # API Endpoints (authRoutes, orderRoutes, etc.)
│   ├── controllers/            # Business logic and request handlers
│   ├── prisma/                 # Database schema and migrations
│   └── server.js               # Main application entry point
│
├── README.md
└── Project_Explanation.txt
```

---
<h2><a class="anchor" id="database-architecture"></a>Database Architecture</h2>

**Relational Mapping handled by Prisma:**
- **User Table:** Stores secure credentials (hashed passwords), emails, and links to order history.
- **Order Table:** Tracks shipping details, grand totals, payment methods, and references the specific User ID.
- **OrderItem Table:** Normalizes cart arrays so each purchased item (shirt, jeans, etc.) is distinctly recorded and tied via Foreign Key to the parent Order.

---
<h2><a class="anchor" id="api--backend-design"></a>API & Backend Design</h2>

**Key Endpoints:**
- `POST /api/auth/signup`: Registers a new user into Neon DB.
- `POST /api/auth/login`: Authenticates credentials and returns a secure Bearer token.
- `POST /api/orders`: Submits a verified transaction securely via JWT authentication.
- `GET /api/orders`: Fetches the authenticated user's purchase history.

---
<h2><a class="anchor" id="user-interface"></a>User Interface</h2>

- **Responsive Design:** Completely mobile-friendly layouts utilizing Tailwind CSS.
- **Interactive Drawers:** The Cart opens dynamically over the screen without routing the user away.
- **Error Handling:** Form validations catch missing fields, poor regex structures (pincodes/phone numbers), and invalid API responses gracefully.

---
<h2><a class="anchor" id="how-to-run-this-project"></a>How to Run This Project</h2>

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/aaradhiya-trends-styles.git
```

2. **Run the Backend Services:**
Open a terminal and start the Express server (Ensure your `.env` contains the Neon `DATABASE_URL`):
```bash
cd backend
npm install
npx prisma generate
npx prisma db push
npm start
```

3. **Run the Frontend Application:**
Open a second, separate terminal to boot the React website:
```bash
cd frontend
npm install
npm run dev
```

4. **Access the Website:**
Open your browser and navigate to `http://localhost:3000`.

---
<h2><a class="anchor" id="future-scope"></a>Future Scope</h2>

- Integrate a live payment gateway like Stripe or Razorpay.
- Add an Admin Dashboard to modify inventory and update shipping statuses.
- Implement an automated email notification system confirming placed orders.
- Integrate robust product searching algorithms with Elasticsearch.

---
<h2><a class="anchor" id="author--contact"></a>Author & Contact</h2>

**SHIV SHANKAR YADAV** 
Full Stack Developer  
📧 Email: shivshankaryadav02@gmail.com 
🔗 [LinkedIn](https://www.linkedin.com/in/shiv/)  
🔗 [GitHub](https://github.com/shive)  
