import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './App.scss';
import ItemsPage from "./views/items"

export const MyContext = React.createContext();

function App() {
  const [items, setItems] = useState([]);
  //================================
  // Function to fetch items data
  //===============================
  useEffect(() => {
    const fetchItemsData = async () => {
      const response = await fetch(process.env.REACT_APP_SERVER_URL + "/items");
      const result = await response.json();
      try {
        if (response.ok) {
          setItems(result)
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
    <MyContext.Provider value={{ items }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/items" element={<ItemsPage />} />
          </Routes>
        </Router>
      </div>
    </MyContext.Provider>
  );
}

export default App;
