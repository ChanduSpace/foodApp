import { Link } from "react-router-dom";

function Home() {
  const restaurants = [
    {
      id: "rest1",
      name: "Spicy Villa",
      category: "Indian",
    },
    {
      id: "rest2",
      name: "Burger Palace",
      category: "Fast Food",
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Restaurants Near You</h2>
      <div style={styles.list}>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} style={styles.card}>
            <h3 style={styles.name}>{restaurant.name}</h3>
            <p style={styles.category}>{restaurant.category}</p>
            <Link to={`/restaurant/${restaurant.id}`} style={styles.link}>
              View Menu
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "2rem",
  },
  list: {
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  },
  card: {
    padding: "1rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  name: {
    marginBottom: "0.5rem",
  },
  category: {
    color: "#666",
    marginBottom: "1rem",
  },
  link: {
    textDecoration: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "4px",
    display: "inline-block",
  },
};

export default Home;
