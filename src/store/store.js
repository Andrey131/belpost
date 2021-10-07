import {createStore, combineReducers, applyMiddleware} from "redux";
import structureModuleReducer from "./structureModuleReduser"
import sliderReduser from "./sliderReduser"
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    structureModule: structureModuleReducer,
    sliderModule: sliderReduser
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;