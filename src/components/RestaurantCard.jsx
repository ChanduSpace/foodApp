import { Link } from "react-router-dom";

function RestaurantCard({ name, cuisine, image, id }) {
  return (
    <Link
      to={`/restaurant/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div style={styles.card}>
        <img src={image} alt={name} style={styles.image} />
        <h3>{name}</h3>
        <p>{cuisine}</p>
      </div>
    </Link>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1rem",
    width: "200px",
    textAlign: "center",
    backgroundColor: "#fafafa",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "6px",
  },
};

export default RestaurantCard;
