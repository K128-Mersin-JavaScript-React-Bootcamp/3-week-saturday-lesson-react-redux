import { ADD_ITEM, DELETE_ITEM, REPLACE_ITEMS } from "../contstants/itemActionTypes";

const initialItemsState = {
  items: []
}

const itemsReducer = (state = initialItemsState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.item] }
    case DELETE_ITEM:
      return {
        ...state, items: state.items.filter((v, i) => (
          v.id !== action.id
        ))
      }
    case REPLACE_ITEMS:
      return {
        ...state, items: action.items
      }
    default:
      return state
  }
}
export default itemsReducer;