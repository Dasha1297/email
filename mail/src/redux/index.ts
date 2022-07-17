import { combineReducers, configureStore } from "@reduxjs/toolkit";
import folderReducer from "./reducers/folderReducer";
import lettersReducer from "./reducers/lettersReducer";
import folderModalReducer from "./reducers/folderModalReducer";

const reducer = combineReducers({
  folderModalReducer,
  folderReducer,
  lettersReducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
