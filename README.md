

# React App (Vite)

A simple React app built with Vite featuring Login, Signup, and Dashboard pages with client-side validations. Users can sign up, log in, and log out. The app is responsive and uses React Icons for better UI.


### Installation

1. Clone the repository:

```bash
git clone https://github.com/Kaushik-patil/DAX_Assignment.git

2. Install dependencies:

```bash
npm install


3. Start the development server:

```bash
npm run dev

4. Open your browser and go to localhost

### Features

* Signup form with validation for:

  * Name (alphabets only)
  * Username (alphanumeric & special characters)
  * Password (validated & confirmed)
  * Email (valid Gmail address)
  * Phone (with country code)
* Login form with validation
* Redirects:

  * After successful signup → Redirect to Login page
  * After successful login → Redirect to Dashboard page
* Dashboard shows logged-in user’s name and a Logout button
* LocalStorage used to save users and persist logged-in user session
* Responsive design for all screen sizes
* React Icons integrated for UI enhancements
* Client-side routing with React Router DOM

---

## Technologies Used

* React 18+
* Vite (build tool)
* React Router DOM (routing)
* React Icons
* CSS for styling and responsiveness
* LocalStorage for storing user data and session

---

## Getting Started

### Prerequisites

* Node.js (v14+ recommended)
* npm or yarn


## Usage

* Go to `/signup` to create a new account.
* After successful signup, you’ll be redirected to `/login`.
* Use your credentials to log in.
* Upon login, you’ll be redirected to `/dashboard` showing your name and a Logout button.
* Click Logout to end session and return to login page.

---

## Validation Rules

* **Name:** Alphabets only
* **Username:** Alphanumeric and special characters (`@`, `.`, `_`, `-`)
* **Password:** Alphanumeric and special characters, cannot be same as username
* **Confirm Password:** Must match password
* **Email:** Valid Gmail address (e.g., `example@gmail.com`)
* **Phone:** Must include country code (e.g., `+911234567890`)

---

## Responsive Design

* Fully responsive layout for mobile, tablet, and desktop
* Input fields and buttons resize and stack appropriately on smaller screens
* Bottom borders and UI elements shrink according to screen size

---

## React Icons

* Icons used for UI elements like Faeye for showing password
* Improves user experience and visual appeal

---

## Notes

* This is a client-side-only authentication demo using `localStorage`.
* Passwords stored in `localStorage` are **not encrypted** 
---
