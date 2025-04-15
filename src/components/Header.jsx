import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

function Header() {
  const { user } = useContext(UserContext);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>🍔 Food Delivery</h1>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        {!user ? (
          <>
            <Link to="/login" style={styles.link}>
              Login
            </Link>
            <Link to="/signup" style={styles.link}>
              Signup
            </Link>
          </>
        ) : (
          <>
            <span style={styles.link}>{user.email}</span>
            <button onClick={handleLogout} style={styles.button}>
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: 0,
  },
  nav: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "transparent",
    border: "1px solid #fff",
    color: "#fff",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default Header;
