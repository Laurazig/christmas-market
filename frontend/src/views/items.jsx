import React from "react";
import "./items.scss"
//import { MyContext } from "../App";
import Eifel from "../assets/MS_eifel.JPG"
import EifelPack from "../assets/MS_eifel_pack.JPG"
import macrame from "../assets/MS_macrame.JPG"
import candelStick from "../assets/MS_wood_candelstick.JPG"
import candelStick2 from "../assets/MS_wood_candelstick_2.JPG"
//import seller_ms from "../assets/seller_ms.json"

const ItemsPage = (props) => {
    //const { items } = useContext(MyContext);

    // <form onSubmit={submitOrder} className="new-delivery-address-form">
    //     <h3>New Delivery Address: </h3>
    //     <div className='new-delivery-address-container'>
    //         <div className='label-and-input'>
    //             <div className='label'> <label htmlFor="hn"></label>House Number</div>
    //             <div> <input type="number" defaultValue={user.info.houseNo} id="hn" name="hn" min={1} /></div>
    //         </div>
    //     </div>
    //     <button className='new-address-btn' disabled={cart.length < 3}> Continue </button>
    // </form>
    return (
        <>
            <h1>Leipzig Christmas Market</h1>
            <h2>MakerSpace</h2>
            <h3>Hand-Crafted Christmas Presents</h3>
            <img src={Eifel} alt="" />
            <img src={EifelPack} alt="" />
            <img src={macrame} alt="" />
            <img src={candelStick} alt="" />
            <img src={candelStick2} alt="" />


            <div className="item-container">
                {props.items.map((item) => {
                    return (
                        <div key={item._id} className="mappedItem">
                            <p className="itemTitle">{item.name}</p>
                            <div>
                            <img src={item.img1} width="300px" alt="christmas handcrafted items" />
                            </div>
                            <p>Description: {item.description}</p>
                            <p>Category: {item.category}</p>
                            <p>Maker: {item.maker} </p>
                            <p>SKU: {item._id}</p>
                            <strong className="price">{item.price} €</strong>
                            <br />
                            <button>buy now </button>
                        </div>
                    )
                })}
            </div>
            {/* <div className="item-container">
                {seller_ms.map((item) => {
                    return (
                        <div key={item._id} className="mappedItem">
                            <img src={item.img1} width="300px" alt="christmas handcrafted items" />
                            <p>{item.name}</p>
                            <strong className="price">price: {item.price} </strong>
                            <p>Description: {item.description}</p>
                            <p>Category: {item.category}</p>
                            <p>Maker: {item.maker} </p>
                            <p>SKU: {item._id}</p>
                        </div>
                    )
                })}
            </div> */}
        </>
    )

}
export default ItemsPage;