*Inside Success Nigeria* project. It includes setup, usage, folder structure, environment config, backend integration, and deployment instructions.

---

### ✅ Final `README.md` for Vite + React Frontend

```md
# 🎨 Inside Success Nigeria – Frontend (React + Vite)

A modern and responsive frontend for the Inside Success Nigeria platform. Built with **React**, styled using **Tailwind CSS**, and powered by **Vite** for fast development. It connects seamlessly to the Express.js backend API.

---

## 🚀 Features

- 🔐 Secure Login and Registration
- 🔁 Password Reset via Email Integration
- 🗳️ Create and Join Voting Events
- 🚧 Protected Routes with JWT Auth
- 💅 Tailwind CSS for fast and responsive UI
- 🔗 Redux toolKit for API Integration
- ⚡ Vite for lightning-fast development

---

## 📁 Project Structure

```

frontend/
├── public/                   # Static assets
├── src/
│   ├── api/                  # Axios API calls
│   ├── components/           # Shared/reusable UI components
│   ├── hooks/                # Custom React hooks
│   ├── pages/                # Main route pages (e.g. Login, Dashboard)
│   ├── utils/                # Utility functions
│   ├── App.jsx               # Main app component with routing
│   └── main.jsx              # Entry point
├── .env                      # Environment config
├── index.html                # HTML template
├── tailwind.config.js        # Tailwind config
├── postcss.config.js         # PostCSS config
├── vite.config.js            # Vite config
├── README.md                 # You're here!

````

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/inside-success-nigeria.git
cd inside-success-nigeria/frontend
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

```env
VITE_API_URL=http://localhost:5000/api
```

> Use your production backend URL when deploying.

### 4. Start the Dev Server

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🔐 Authentication Flow

* JWT token is saved in `localStorage`
* A custom `useAuthRedirect()` hook protects private routes
* Logout clears token and redirects to login

---

## 📬 Forgot Password Flow

1. User enters their email on **Forgot Password**
2. Backend sends email via Nodemailer with reset token
3. User lands on a page like `/reset-password/:id?token=xyz`
4. Enters new password, and it's sent to backend via PATCH

---

## 📦 Scripts

```bash
npm run dev       # Run development server
npm run build     # Build for production
npm run preview   # Preview production build locally
```

---

## 🔗 API Integration

API base URL is defined in `.env` as `VITE_API_URL`.

Example usage with Axios:

```js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
```

You can find all requests in `src/api/`.

---

## ✅ Route Examples

* `/login` – Login page
* `/register` – Register a new user
* `/forgot-password` – Request password reset
* `/dashboard` – Authenticated user dashboard
* `/dashboard/vote-decison` – Special route exempt from auth redirect
* `/voting/create` – Form to create voting event

---

## 🧪 Built With

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [React Router](https://reactrouter.com/) 
* [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## 🌍 Deployment

To deploy with [Vercel](https://vercel.com):

1. Push this frontend to GitHub
2. Connect your repo on Vercel
3. Set environment variable:

   * `VITE_API_URL=https://your-backend-api.com/api`
4. Click Deploy

Or for [Netlify](https://netlify.com):

```bash
npm run build
# Drag 'dist/' folder to Netlify dashboard or use CLI
```

---

## 🙋 Frequently Asked

**Q:** What if I get CORS errors?

**A:** Ensure the backend has proper CORS headers set:

```js
import cors from 'cors';
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
```

**Q:** Can I use this with Create React App instead of Vite?

**A:** Yes, but Vite is faster and recommended.

---

## 👨‍💻 Author

**Usman Olasunkanmi**
GitHub: [@white12381](https://github.com/white12381)

---

## 📄 License

MIT License. Free to use and modify.

---


```

---

### ✅ What's Included:
- Full project setup
- Folder structure
- Environment variables
- Auth flow
- Deployment instructions

Let me know if you'd like me to generate a matching `vite.config.js` or Tailwind setup as well!
```
