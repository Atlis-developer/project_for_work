import { combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware } from "redux"
import { usersReducer } from "./users-reducer";
import { formReducer } from "./form-reducer";

let reducers = combineReducers({
    usersPage: usersReducer,
    formPage: formReducer
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));