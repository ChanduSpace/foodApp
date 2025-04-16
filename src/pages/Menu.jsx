import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import restaurantData from "../data/restaurants";

function Menu() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const restaurant = restaurantData[id];

  const menuItems = [
    { id: "item1", name: "Paneer Tikka", price: 180 },
    { id: "item2", name: "Butter Chicken", price: 250 },
    { id: "item3", name: "Veg Biryani", price: 150 },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{restaurant?.name || "Restaurant"}</h2>
      <p style={styles.category}>{restaurant?.category}</p>

      <ul style={styles.menuList}>
        {menuItems.map((item) => (
          <li key={item.id} style={styles.menuItem}>
            <div>
              <h4 style={styles.name}>{item.name}</h4>
              <p style={styles.price}>₹{item.price}</p>
            </div>
            <button
              onClick={() => dispatch(addToCart(item))}
              style={styles.addBtn}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "2rem auto",
    padding: "1rem",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "0.2rem",
  },
  category: {
    fontSize: "1rem",
    color: "#777",
    marginBottom: "1rem",
  },
  menuList: {
    listStyle: "none",
    padding: 0,
  },
  menuItem: {
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
  addBtn: {
    background: "#007bff",
    color: "#fff",
    padding: "6px 12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Menu;
