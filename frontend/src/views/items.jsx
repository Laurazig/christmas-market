import React, { useContext } from "react";
import "./items.scss"
import { MyContext } from "../App";

const ItemsPage = () => {
    const { items } = useContext(MyContext);
    return (
        <>
            <h1>Leipzig Christmas Market</h1>
            <h2>MakerSpace</h2>
            <h3>Hand-Crafted Christmas Presents</h3>
            <div className="item-container">
                {items.map((item) => {
                    return (
                        <div key={item._id} className="mappedItem">
                            <p>here</p>
                            <img src={item.img1} width="300px" alt="christmas handcrafted items" />
                            <p>{item.name}</p>
                            <strong className="price">€ {item.price}</strong>
                        </div>
                    )
                })}
            </div>

        </>
    )

}
export default ItemsPage;