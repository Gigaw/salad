import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { moleculesReducer } from "./reducers/moleculesReducer";
import { saladsReducer } from "./reducers/saladsReducer";


const rootReducer = combineReducers({
  salads: saladsReducer,
  molecules: moleculesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
