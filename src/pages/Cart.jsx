import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const placeOrder = async () => {
    const order = {
      userId: user.uid,
      restaurantName: "Spicy Villa", // You can make this dynamic
      total: totalPrice,
      date: new Date().toLocaleString(),
    };

    try {
      await addDoc(collection(db, "orders"), order);
      alert("Order placed!");
      dispatch(clearCart());
    } catch (error) {
      console.error("Order failed:", error.message);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cartItems.map((item) => (
            <li key={item.id} style={styles.item}>
              <span>{item.name}</span>
              <span>
                ₹{item.price} × {item.quantity}
              </span>
              <button
                onClick={() => handleRemove(item.id)}
                style={styles.removeBtn}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ₹{totalPrice}</h3>
      {user && cartItems.length > 0 && (
        <button onClick={placeOrder} style={styles.orderBtn}>
          Place Order
        </button>
      )}
    </div>
  );
}

const styles = {
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
    borderBottom: "1px solid #ccc",
    paddingBottom: "0.5rem",
  },
  removeBtn: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  orderBtn: {
    marginTop: "1rem",
    padding: "8px 16px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Cart;
