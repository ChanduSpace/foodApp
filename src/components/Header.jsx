import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

function Header() {
  const cartItems = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>🍔 Foodie</h1>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/cart" style={styles.link}>
          Cart ({cartItems.length})
        </Link>
        {user ? (
          <>
            <span style={styles.email}>{user.email}</span>
            <button onClick={handleLogout} style={styles.button}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" style={styles.link}>
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: 0,
    fontSize: "1.5rem",
  },
  nav: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
  },
  button: {
    background: "#dc3545",
    border: "none",
    padding: "6px 10px",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "4px",
  },
  email: {
    fontSize: "0.9rem",
    color: "#ccc",
  },
};

export default Header;
