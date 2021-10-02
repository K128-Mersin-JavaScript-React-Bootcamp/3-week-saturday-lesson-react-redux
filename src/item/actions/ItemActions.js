import { ADD_ITEM, DELETE_ITEM } from "../contstants/ItemActionTypes";

export const addItem = itemName => ({
    type: ADD_ITEM,
    itemName: itemName
  })
  export const deleteItem = itemName => ({
      type: DELETE_ITEM,
      itemName: itemName
    })