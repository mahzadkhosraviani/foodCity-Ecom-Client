# 🍔 Food E-Commerce

A modern, responsive, and fully dynamic food e-commerce frontend built with **Next.js, TypeScript, and React**.

This project is a complete food ordering platform where users can browse products, view product details, manage their shopping cart, place orders, track transactions, manage their profile and addresses, and complete the authentication and payment flow.

The application is designed to provide a complete and user-friendly online food shopping experience.

---

## ✨ Features

### 🔐 Authentication

* User login with mobile number
* OTP-based authentication
* Secure authentication flow
* Persistent user session
* Logout functionality
* Protected user profile pages

### 🛍️ Products

* Dynamic product listing
* Dynamic product detail pages
* Product images
* Product pricing
* Sale prices and discounts
* Product quantity management
* Product availability
* Dynamic product routes
* Product categories
* Category-based filtering
* Different food categories

### 🔎 Filtering & Categories

* Browse products by category
* Filter food products
* Dynamic category pages
* Easy navigation between different food categories

### 🛒 Shopping Cart

* Add products to cart
* Remove products from cart
* Increase/decrease product quantity
* Automatically calculate cart total
* Apply discount coupons
* Calculate discount percentage
* Display final payable amount
* Clear entire shopping cart

### 💳 Checkout & Payment

* Select delivery address
* Review shopping cart before payment
* Apply discount codes
* Calculate final payment amount
* Payment gateway integration
* Payment verification
* Transaction handling
* Redirect to payment gateway

### 📦 Orders

* Place food orders
* View order history
* View order details
* Track order information
* Display ordered products and quantities

### 💰 Transactions

* View payment transactions
* Display transaction status
* View payment information
* Payment verification flow

### 👤 User Profile

* User profile page
* User information
* Manage delivery addresses
* Add new addresses
* Edit existing addresses
* View orders
* View transactions

### 🖼️ UI & UX

* Fully responsive design
* Modern e-commerce interface
* Product cards
* Product detail pages
* Category navigation
* Responsive shopping cart
* Modal components
* Toast notifications
* Loading states
* Empty states
* User-friendly forms

### 📱 Responsive Design

The application is designed to work across different screen sizes:

* Desktop
* Laptop
* Tablet
* Mobile

---


## 🛠️ Tech Stack

### Frontend

* **Next.js**
* **React**
* **TypeScript**
* **Redux Toolkit**

### Libraries & Tools

* React Redux
* React Toastify
* React Multi Date Picker
* Next.js Server Actions
* Next.js App Router
* REST API integration

---

## 🔌 Backend

This project consumes a separate **REST API backend**.

The backend is responsible for:

* Authentication
* OTP verification
* User management
* Products
* Categories
* Orders
* Transactions
* Addresses
* Coupons
* Payment processing

The backend and database are **not included in this repository**.

---

## 🔐 API Authentication

The application uses token-based authentication.

Authentication tokens are securely handled through HTTP cookies and are used when communicating with protected API endpoints.

The frontend communicates with the backend through REST API requests for operations such as:

* Login
* OTP verification
* User information
* Products
* Addresses
* Orders
* Transactions
* Coupons
* Payments

---



---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/mahzadkhosraviani/food-ecom.git
```

Navigate to the project directory:

```bash
cd next-ecom
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the project root and configure the backend API URL:

```env
API_URL=your_backend_api_url
```

Make sure the backend API is running and accessible before using authentication, products, orders, and payment features.

---

## 📸 Application Pages

The application includes several main sections:

* Home
* Menu / Products
* Product Details
* Cart
* Checkout
* Login / OTP Authentication
* Profile
* Addresses
* Orders
* Transactions
* About
* Contact

---

## 📌 Project Status
done and final version.

---



## 👨‍💻 Author

**Mahzad Khosraviani**

Frontend Developer

Built with ❤️ using Next.js, React, and TypeScript.
