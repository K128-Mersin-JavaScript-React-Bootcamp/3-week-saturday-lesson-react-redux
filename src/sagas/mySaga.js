import axios from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { ENDPOINTS } from '../constants/endpoints';
import { replaceItems } from '../features/item/actions/itemActions';
import { REPLACE_ITEMS } from '../features/item/contstants/itemActionTypes';

function* mySaga() {
  yield takeEvery("GET_ITEM_SAGA", fetchItems); // or takeLatest
}

function* fetchItems(action) {
  try {
    console.log("PAYLOAD", action)
    const items = yield call(fetchItemsFromServer, action.payload);
    console.log("ITEMS", items)
    yield put(replaceItems(items));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

async function fetchItemsFromServer() {
  const response = await axios(ENDPOINTS.BASE_URL + "/items")
  return response.data;
}
export default mySaga;