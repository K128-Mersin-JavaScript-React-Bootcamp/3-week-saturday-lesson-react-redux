import { ADD_ITEM, DELETE_ITEM, REPLACE_ITEMS } from "../contstants/ItemActionTypes";

export const addItem = item => ({
  type: ADD_ITEM,
  item: item
})
export const deleteItem = id => ({
  type: DELETE_ITEM,
  id: id
})
export const replaceItems = items => ({
  type: REPLACE_ITEMS,
  items: items
})