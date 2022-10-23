import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './App.scss';
import ItemsPage from "./views/items"
import StripeSuccessPage from "./views/stripe/stripeSuccess";
import StripeCancelPage from "./views/stripe/stripeCancel";

//export const MyContext = React.createContext();

function App() {
  const [items, setItems] = useState([]);
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

  const submitOrder = async (e) => {
    e.preventDefault();
  
      const newOrder = {
        // meals: cart.map((item) => item._id),
        // total: total,
        // userId: user.id,
        // deliveryAddress: {
        //   houseNo: sameAddress ? user.info.houseNo : e.target.hn.value,
        //   street: sameAddress ? user.info.street : e.target.stn.value,
        //   zipCode: sameAddress ? user.info.zipCode : e.target.zc.value,
        //   city: sameAddress ? user.info.city : e.target.city.value,
        //   phone: sameAddress ? user.info.phone : e.target.phone.value,
        // },
      };

      // console.log(newOrder);

      const settings = {
        method: 'POST',
        body: JSON.stringify(newOrder),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(`http://localhost:3001/orders`, settings);
      const result = await response.json();
      try {
        if (response.ok) {
          setOrders([...orders, result.data._id]);
          setPlacedOrder(true);
        } else {
          throw new Error(result.message);
        }
      } catch (err) {
        alert(err.message);
      }
     };

  return (
    //<MyContext.Provider value={{ items, setItems }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<ItemsPage items={items} />} />
            <Route path="/stripe-success" element={<StripeSuccessPage />} />
            <Route path="/stripe-cancel" element={<StripeCancelPage />} />
          </Routes>
        </Router>
      </div>
    //</MyContext.Provider>
  );
}

export default App;
