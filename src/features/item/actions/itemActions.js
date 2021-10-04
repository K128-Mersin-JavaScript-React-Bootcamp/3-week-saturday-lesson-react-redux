import axios from "axios";
import { ENDPOINTS } from "../../../constants/endpoints";
import { ADD_ITEM, DELETE_ITEM, REPLACE_ITEMS } from "../contstants/itemActionTypes";

const addItem = item => ({
  type: ADD_ITEM,
  item: item
})

const deleteItem = id => ({
  type: DELETE_ITEM,
  id: id
})

export const replaceItems = items => ({
  type: REPLACE_ITEMS,
  items: items
});

export const addItemFromServer = (item) => {
  return function(dispatch) {
    return axios.post(ENDPOINTS.BASE_URL + `/items`, item)
    .then(json => dispatch(addItem(json.data)));
  }
}

export const deleteItemFromServer = (id) => {
  return function(dispatch) {
    return axios.delete(ENDPOINTS.BASE_URL + `/items/${id}`)
    .then(json => dispatch(deleteItem(id)));
  }
}

export const getItemsFromServer = () => {
  return function(dispatch) {
    return axios(ENDPOINTS.BASE_URL + "/items")
    .then(({data}) => dispatch(replaceItems(data)))
  }
}