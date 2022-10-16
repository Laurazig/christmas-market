import React from "react";
import "./items.scss"
//import { MyContext } from "../App";
import Eifel from "../assets/MS_eifel.JPG"
import EifelPack from "../assets/MS_eifel_pack.JPG"
import macrame from "../assets/MS_macrame.JPG"
import candelStick from "../assets/MS_wood_candelstick.JPG"
import candelStick2 from "../assets/MS_wood_candelstick_2.JPG"
import seller_ms from "../assets/seller_ms.json"

const ItemsPage = (props) => {
    //const { items } = useContext(MyContext);
    return (
        <>
            <h1>Leipzig Christmas Market</h1>
            <h2>MakerSpace</h2>
            <h3>Hand-Crafted Christmas Presents</h3>
            <img src={Eifel} alt=""/>
            <img src={EifelPack} alt=""/>
            <img src={macrame} alt=""/>
            <img src={candelStick} alt=""/>
            <img src={candelStick2} alt=""/>

            <div className="item-container">
                {seller_ms.map((item) => {
                    return (
                        <div key={item.name} className="mappedItem">
                            <img src={item.img1} width="300px" alt="christmas handcrafted items" />
                            <p>{item.name}</p>
                            <strong className="price">€ {item.price}</strong>
                        </div>
                    )
                })}
            </div>
            {/* <div className="item-container">
                {props.items.map((item) => {
                    return (
                        <div key={item._id} className="mappedItem">
                            <p>from DB</p>
                            <img src={item.img1} width="300px" alt="christmas handcrafted items" />
                            <p>{item.name}</p>
                            <strong className="price">€ {item.price}</strong>
                        </div>
                    )
                })}
            </div> */}
        </>
    )

}
export default ItemsPage;