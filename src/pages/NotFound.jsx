import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={styles.container}>
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.button}>
        Go to Home
      </Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "4rem 2rem",
  },
  button: {
    display: "inline-block",
    marginTop: "1.5rem",
    padding: "0.75rem 1.5rem",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
  },
};

export default NotFound;
