import { getCats } from "./api";

export const newBornCat         = catName => ({ type: 'NEWBORN_CAT'    , payload: catName });
export const sellCat            = catName => ({ type: 'SELL_CAT'       , payload: catName });
export const loadCats           = cats    => ({ type: 'LOAD_CATS'      , payload: cats    });

export const startFetching = () => ({ type: 'START_FETCHING' });

export const increment = () => ({ type: 'INCREMENT' });
export const decrement = () => ({ type: 'DECREMENT' });

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
