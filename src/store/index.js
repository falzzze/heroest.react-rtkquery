import { configureStore } from '@reduxjs/toolkit';
import filters from '../reducers/filters';
import heroes from '../components/heroesList/heroesSlice';
import { apiSlice } from '../api/apiSlice';

const stringMiddleware = () => (dispatch) => (action) => {
  if (typeof action ==='string') {
    return dispatch({ type: action });
  }
  return dispatch(action);
};

const store = configureStore({
  reducer: {
    heroes,
    filters,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware, apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})


export default store;