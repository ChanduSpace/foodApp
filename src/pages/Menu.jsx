import { useParams } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

function Menu() {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");

  useEffect(() => {
    const fetchMenu = async () => {
      const docRef = doc(db, "restaurants", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setMenu(data.menu || []);
        setRestaurantName(data.name);
      } else {
        console.log("No such restaurant!");
      }
    };

    fetchMenu();
  }, [id]);

  return (
    <div>
      <h2>Menu for {restaurantName}</h2>
      {menu.length === 0 ? (
        <p>No menu items available.</p>
      ) : (
        menu.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              margin: "1rem",
              padding: "1rem",
            }}
          >
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            {item.image && <img src={item.image} alt={item.name} width="150" />}
          </div>
        ))
      )}
    </div>
  );
}

export default Menu;
