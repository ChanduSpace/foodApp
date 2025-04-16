import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your cart is empty.</p>
      ) : (
        <>
          <div style={styles.cartList}>
            {cartItems.map((item) => (
              <div key={item.id} style={styles.card}>
                <h4>{item.name}</h4>
                <p>{item.price}</p>
                <button
                  onClick={() => handleRemove(item.id)}
                  style={styles.removeBtn}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div style={styles.footer}>
            <button onClick={handleClear} style={styles.clearBtn}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  cartList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    justifyContent: "center",
    marginTop: "2rem",
  },
  card: {
    border: "1px solid #ddd",
    padding: "1rem",
    width: "200px",
    borderRadius: "6px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  removeBtn: {
    marginTop: "0.5rem",
    padding: "6px 12px",
    backgroundColor: "#dc3545",
    border: "none",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
  },
  clearBtn: {
    padding: "10px 20px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "2rem",
  },
  footer: {
    textAlign: "center",
  },
};

export default Cart;
