// import { createStore, applyMiddleware  } from 'redux'
// import { myLoggerMiddleware } from './my-logger-middleware';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import * as actionCreators from './action-creators';

// let store = createStore(catsReducer);
// let store = createStore(catsReducer, applyMiddleware(thunk));

// let store = createStore(catsReducer, applyMiddleware(myLoggerMiddleware));
// let store = createStore(catsReducer, composeWithDevTools(applyMiddleware(thunk)));

// import * as generators from './generators';

/*
store.subscribe(() =>
  console.log(store.getState())
);
*/

// ---------------------- Thunk -----------------------

// import thunk from 'redux-thunk';
// let store = createStore(catsReducer, applyMiddleware(thunk));

/*
export const startFetching = () => ({ type: 'START_FETCHING' });

/*
export function catsReducer(state = initialState, action) {
  switch (action.type) {
  case 'NEWBORN_CAT':
    return Object.assign({} , state, { cats: [...state.cats, action.payload] });
  case 'SELL_CAT':
    return Object.assign({}, state, { cats: [...state.cats,  state.filter(cat => cat !== action.payload)] });
  case 'LOAD_CATS':
    return Object.assign({}, { cats: action.payload, isBusy: false });
  case 'START_FETCHING':
    return Object.assign({}, state, { isBusy: true });
  default:
    return state;
  }
};

export const fetchCats = () => {
  return (dispatch, getState) => {
    return getCats().then(
      cats => dispatch(loadCats(cats))
    );
  };
};

/*
export const fetchCats = () => {
  return (dispatch, getState) => {
    dispatch(startFetching());
    return getCats().then(
      cats => {
        dispatch(loadCats(cats));
      }
    );
  };
};
*/

/*
let initialState = {
  cats: ['cinamon', 'mrlopez'],
  isBusy: false
};
*/

// ---------------------- Saga ----------------------

// import createSagaMiddleware from 'redux-saga'

/*
const sagaMiddleware = createSagaMiddleware();
let store = createStore(catsReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export const fetchCats = cats => ({ type: 'FETCH_CATS' });

export function catsReducer(state = initialState, action) {
  switch (action.type) {
  case 'NEWBORN_CAT':
    return Object.assign({} , state, { cats: [...state.cats, action.payload] });
  case 'SELL_CAT':
    return Object.assign({}, state, { cats: [...state.cats,  state.filter(cat => cat !== action.payload)] });
  case 'LOAD_CATS':
    return Object.assign({}, { cats: action.payload, isBusy: false });
  case 'FETCH_CATS':
    return Object.assign({}, state, { isBusy: true });
  default:
    return state;
  }
};

*/

// ---------------------- Vanjilla Store ----------------------

/*
function myStore(state = {}, action) {
    return {
        cats: catsReducer(state.cats, action),
        counter: counterReducer(state.counter, action)
    }
}
*/

// store.dispatch()
// store.getstate()

// store.dispatch({ type: 'NEWBORN_CAT', payload: 'nancy'});
// store.dispatch({ type: 'SELL_CAT', payload: 'mrlopez'});

// let state1 = myStore({}, { type: 'NEWBORN_CAT', payload: 'nancy'});
// let state2 = myStore(state1, { type: 'INCREMENT'});
