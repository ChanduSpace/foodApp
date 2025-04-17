import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";

function Orders() {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const q = query(
        collection(db, "orders"),
        where("userId", "==", user.uid)
      );
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => doc.data());
      setOrders(data);
    };

    if (user) {
      fetchOrders();
    }
  }, [user]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul>
          {orders.map((order, idx) => (
            <li key={idx}>
              <strong>{order.restaurantName}</strong> – ₹{order.total} –{" "}
              {order.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Orders;
