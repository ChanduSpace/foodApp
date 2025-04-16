import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const dummyMenu = {
  1: [
    { id: 101, name: "Margherita Pizza", price: "$10" },
    { id: 102, name: "Pepperoni Pizza", price: "$12" },
  ],
  2: [
    { id: 201, name: "Salmon Sushi", price: "$15" },
    { id: 202, name: "Tuna Roll", price: "$13" },
  ],
  3: [
    { id: 301, name: "Chicken Curry", price: "$11" },
    { id: 302, name: "Paneer Tikka", price: "$9" },
  ],
};

function Menu() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const items = dummyMenu[id] || [];

  const handleAdd = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>📋 Menu</h2>
      <div style={styles.menu}>
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} style={styles.item}>
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <button onClick={() => handleAdd(item)} style={styles.button}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No menu items found.</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  menu: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    justifyContent: "center",
    marginTop: "2rem",
  },
  item: {
    border: "1px solid #ccc",
    padding: "1rem",
    width: "200px",
    borderRadius: "6px",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  button: {
    marginTop: "0.5rem",
    padding: "6px 12px",
    backgroundColor: "#007bff",
    border: "none",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Menu;
