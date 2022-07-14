import { combineReducers, configureStore } from "@reduxjs/toolkit";
import folderReducer from "./reducers/folderReducer";
import lettersReducer from "./reducers/lettersReducer";

const reducer = combineReducers({ folderReducer, lettersReducer });
const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
