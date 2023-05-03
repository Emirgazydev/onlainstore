import {applyMiddleware, combineReducers, createStore} from "redux";
import {MainReducer} from "../Reduser/reduser";
import {BasketReduser} from "../Reduser/BasketReduser";
import {FavoriteReduser} from "../Reduser/FavoriteReduser";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";


export const store = createStore(combineReducers({
    main: MainReducer,
    basket: BasketReduser,
    favorites: FavoriteReduser
}),composeWithDevTools(applyMiddleware(thunk)))