import { combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware } from "redux"
import { usersReducer } from "./users-reducer";

let reducers = combineReducers({
    usersPage: usersReducer,
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));