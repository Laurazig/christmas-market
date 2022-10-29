import Order from "../models/order.js";
import createError from "http-errors";
import User from "../models/user.js";

//===========================================================
// Post customer ordered meals
//===========================================================

export const orderPost = async (req, res, next) => {
  
  try{
    const user = await User.findById(req.body.userId)

    if(user) {
      const order = new Order({
        meals: req.body.meals,
        totalPrice: req.body.total,
        deliveryAddress:req.body.deliveryAddress
      })
    
      await order.save()

      user.orders.push(order._id)
      await user.save()
      
      res.json({success: true, data: order})
    } else{
      res.json({success: false, message: "You need to log in first."})
    }
  }catch(err){
    next(err)
  }
};
