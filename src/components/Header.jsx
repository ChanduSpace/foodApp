import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cart);

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
    gap: "1.5rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
  },
};

export default Header;
