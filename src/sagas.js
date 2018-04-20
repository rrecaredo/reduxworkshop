import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getCats } from './api';

function* fetchCats(action) {
  try {
     const cats = yield call(getCats);
     yield put({type: "LOAD_CATS", payload: cats});
  } catch (e) {
     yield put({type: "USER_FETCH_FAILED", payload: e.message});
  }
}

function* mySaga() {
  yield takeEvery("FETCH_CATS", fetchCats);
}

export default mySaga;