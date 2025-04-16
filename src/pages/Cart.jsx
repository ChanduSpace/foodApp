import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p style={styles.empty}>Your cart is empty.</p>
      ) : (
        <>
          <ul style={styles.list}>
            {cartItems.map((item) => (
              <li key={item.id} style={styles.item}>
                <div>
                  <h4 style={styles.name}>{item.name}</h4>
                  <p style={styles.price}>₹{item.price}</p>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  style={styles.removeBtn}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <hr />
          <div style={styles.totalSection}>
            <h3>Total: ₹{total}</h3>
            <button
              onClick={() => dispatch(clearCart())}
              style={styles.clearBtn}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "2rem auto",
    padding: "1rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    fontSize: "1.8rem",
    marginBottom: "1rem",
  },
  empty: {
    textAlign: "center",
    fontSize: "1rem",
    color: "#666",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem 0",
    borderBottom: "1px solid #eee",
  },
  name: {
    margin: "0 0 4px",
  },
  price: {
    margin: 0,
    color: "#888",
  },
  removeBtn: {
    background: "#ff4d4f",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    cursor: "pointer",
    borderRadius: "4px",
  },
  totalSection: {
    textAlign: "right",
    marginTop: "1rem",
  },
  clearBtn: {
    marginTop: "0.5rem",
    background: "#333",
    color: "#fff",
    padding: "6px 12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Cart;
