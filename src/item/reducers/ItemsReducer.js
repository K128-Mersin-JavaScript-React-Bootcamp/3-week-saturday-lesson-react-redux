import { ADD_ITEM, DELETE_ITEM } from "../contstants/ItemActionTypes";

const initialItemsState = {
  items: []
}

const itemsReducer = (state = initialItemsState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.itemName] }
    case DELETE_ITEM:
      return { ...state, items: state.items.filter((v, i) => (
        v !== action.itemName
      )) }
    default:
      return state
  }
}
export default itemsReducer;