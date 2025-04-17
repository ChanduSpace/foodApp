import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { clearUser } from "../redux/userSlice";

function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(clearUser());
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logo}>
        FoodDelivery
      </Link>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        {user && (
          <Link to="/cart" style={styles.link}>
            Cart
          </Link>
        )}
        {user && (
          <Link to="/orders" style={styles.link}>
            Orders
          </Link>
        )}
        {!user ? (
          <Link to="/login" style={styles.link}>
            Login
          </Link>
        ) : (
          <button onClick={handleLogout} style={styles.logoutBtn}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}

const styles = {
  header: {
    padding: "1rem 2rem",
    backgroundColor: "#f8f8f8",
    borderBottom: "1px solid #ddd",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    textDecoration: "none",
  },
  nav: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "#007bff",
    fontWeight: "500",
  },
  logoutBtn: {
    background: "#ff4d4f",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Header;
