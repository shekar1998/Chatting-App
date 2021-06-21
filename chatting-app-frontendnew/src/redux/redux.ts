import { createStore, combineReducers } from "redux";
import { formReducer, usersChatsReducer, usersReducer, DarkReducer } from "./reducer";

const reducer = combineReducers({
  form: formReducer,
  chat : usersChatsReducer,
  users : usersReducer,
  mode: DarkReducer
});

const store = createStore(reducer);

export default store;
