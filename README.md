# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

food-delivery-app/
├── public/
│ └── vite.svg
├── src/
│ ├── assets/ # Static files (images, etc.)
│ ├── components/ # Reusable components (e.g., Header, Footer, Auth, etc.)
│ │ └── Auth.jsx
│ ├── firebase/ # Firebase config and setup
│ │ └── firebaseConfig.js
│ ├── pages/ # Main page components (routed views)
│ │ ├── Home.jsx
│ │ ├── Login.jsx
│ │ └── Signup.jsx
│ ├── styles/ # Plain CSS files
│ │ └── app.css
│ ├── App.jsx # Root component with routes
│ ├── main.jsx # App entry point
│ └── index.css # Optional global styles
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── README.md





src/
├── App.jsx
├── main.jsx
├── firebase/
│   └── firebaseConfig.js
├── redux/
│   ├── cartSlice.js
│   └── store.js
├── components/
│   ├── Header.jsx
│   └── ProtectedRoute.jsx
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Cart.jsx
│   ├── Menu.jsx
│   ├── Orders.jsx
│   └── NotFound.jsx
└── index.css
