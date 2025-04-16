import RestaurantCard from "../components/RestaurantCard";

const dummyRestaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    cuisine: "Italian",
    image: "https://source.unsplash.com/featured/?pizza",
  },
  {
    id: 2,
    name: "Sushi Central",
    cuisine: "Japanese",
    image: "https://source.unsplash.com/featured/?sushi",
  },
  {
    id: 3,
    name: "Curry King",
    cuisine: "Indian",
    image: "https://source.unsplash.com/featured/?curry",
  },
];

function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>🍽️ Featured Restaurants</h2>
      <div style={styles.list}>
        {dummyRestaurants.map((res) => (
          <RestaurantCard
            key={res.id}
            id={res.id}
            name={res.name}
            cuisine={res.cuisine}
            image={res.image}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  list: {
    display: "flex",
    gap: "2rem",
    justifyContent: "center",
    marginTop: "2rem",
    flexWrap: "wrap",
  },
};

export default Home;
