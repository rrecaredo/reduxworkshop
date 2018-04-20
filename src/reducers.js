let initialState = ['cinamon', 'mrlopez'];

export function catsReducer(state = initialCats, action) {
  switch (action.type) {
  case 'NEWBORN_CAT':
    return [...state, action.payload];
  case 'SELL_CAT':
    return state.filter(cat => cat !== action.payload);
  case 'LOAD_CATS':
    return action.payload;
  default:
    return state;
  }
};

/*
export function counterReducer(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}
*/