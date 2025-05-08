import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div style={styles.container}>
      <h2>🎉 Order Placed Successfully!</h2>
      <p>Thank you for your order. Your food is on its way!</p>
      <Link to="/" style={styles.button}>
        Go to Home
      </Link>
      <Link
        to="/orders"
        style={{ ...styles.button, backgroundColor: "#007bff" }}
      >
        View Orders
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
    margin: "1rem",
    padding: "0.75rem 1.5rem",
    backgroundColor: "#28a745",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
  },
};

export default OrderSuccess;
