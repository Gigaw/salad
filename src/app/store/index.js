import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { moleculesReducer } from "./reducers/moleculesReducer";
import { saladsReducer } from "./reducers/saladsReducer";
import { modalReducer } from "./reducers/modalReducer";

const rootReducer = combineReducers({
  salads: saladsReducer,
  molecules: moleculesReducer,
  modal: modalReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
