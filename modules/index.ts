import { combineReducers } from "redux";
import todos from "./todos";
import travels from "./travels";

const rootReducer = combineReducers({
  todos,
  travels,
});

export default rootReducer;

export type RootReducerType = ReturnType<typeof rootReducer>;
