import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { Link } from "react-router-dom";

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const querySnapshot = await getDocs(collection(db, "restaurants"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRestaurants(data);
      setLoading(false);
    };

    fetchRestaurants();
  }, []);

  const filteredRestaurants = restaurants.filter((rest) =>
    rest.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2>Restaurants</h2>
      <input
        type="text"
        placeholder="Search restaurants..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.input}
      />
      {loading ? (
        <p>Loading restaurants...</p>
      ) : (
        <div style={styles.grid}>
          {filteredRestaurants.length === 0 ? (
            <p>No restaurants found.</p>
          ) : (
            filteredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.id}
                to={`/restaurant/${restaurant.id}`}
                style={styles.card}
              >
                <h3>{restaurant.name}</h3>
                <p>{restaurant.description}</p>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
  },
  input: {
    padding: "0.75rem",
    marginBottom: "1rem",
    width: "100%",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1rem",
  },
  card: {
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textDecoration: "none",
    color: "black",
    backgroundColor: "#f9f9f9",
  },
};

export default Home;
