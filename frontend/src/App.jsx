import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './App.scss';
import ItemsPage from "./views/items"
import StripeSuccessPage from "./views/stripe/stripeSuccess";
import StripeCancelPage from "./views/stripe/stripeCancel";

export const MyContext = React.createContext();

function App() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(cartItems);
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);

  //================================
  // Function to fetch items data
  //===============================
  useEffect(() => {
    const fetchItemsData = async () => {
      const response = await fetch(process.env.REACT_APP_SERVER_URL + "/");
      const result = await response.json();
      try {
        if (response.ok) {
          setItems(result)
          //console.log({result})
        } else {
          throw new Error(result.message)
        }
      } catch (err) {
        alert(err.message)
      }
    }
    fetchItemsData()
  }, []);

  return (
    <MyContext.Provider value={{ cart, items, setItems, orders, setOrders }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<ItemsPage items={items} orders={orders} setOrders={setOrders} />} />
            <Route path="/stripe-success" element={<StripeSuccessPage />} />
            <Route path="/stripe-cancel" element={<StripeCancelPage />} />
          </Routes>
        </Router>
      </div>
    </MyContext.Provider>
  );
}

export default App;
