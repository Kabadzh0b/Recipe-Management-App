import {combineReducers} from "redux";
import {pageReducer} from "./pageReducer";
import {favoriteListReducer} from "./favoriteListReducer";


export const rootReducer = combineReducers({
    page:pageReducer,
    favoriteList:favoriteListReducer,
})

export type RootState = ReturnType<typeof rootReducer>