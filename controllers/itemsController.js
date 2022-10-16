import item from "../models/item_model.js"
import createError from "http-errors";

//=====================================
//GET route - get all items from database & display
//=====================================

export const itemsGet = async (req, res, next) => {
    let foundItems;
    try {
      foundItems = await item.find();
      //console.log(foundItems)
    } catch {
      return next(createError(500, "Database could not get items. Please try again"));
    }
    //res.send(foundItems)
    res.status(201).json(foundItems);
  };
  