import React from "react";

// import {connect} from "react-redux";
// import incrementReducer from "../reducers";
import {createStore,combineReducers} from "redux";

// import {increment} from "./../actions/index";
import incrementReducer from "../reducers";

const store  = createStore(incrementReducer)

export default store

