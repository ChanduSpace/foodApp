import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, onSnapshot } from "firebase/firestore";

import { auth, db } from "./firebase/firebaseConfig";
import { setUser, clearUser } from "./redux/userSlice";
import { setCart } from "./redux/cartSlice";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const [initialized, setInitialized] = useState(false);

  // Handle login/logout state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ uid: user.uid, email: user.email }));
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  // Load cart from Firestore on login
  useEffect(() => {
    if (user) {
      const cartRef = doc(db, "carts", user.uid);
      const unsubscribe = onSnapshot(cartRef, (docSnap) => {
        if (docSnap.exists()) {
          const cartItems = docSnap.data().items;
          dispatch(setCart(cartItems));
        }
        setInitialized(true);
      });

      return () => unsubscribe();
    }
  }, [user, dispatch]);

  // Sync cart to Firestore on changes
  useEffect(() => {
    if (user && initialized) {
      const cartRef = doc(db, "carts", user.uid);
      setDoc(cartRef, { items: cart });
    }
  }, [cart, user, initialized]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/restaurant/:id"
          element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
