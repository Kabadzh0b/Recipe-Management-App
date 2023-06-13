import {defaultState, pageAction, pageState} from "../../types/page";

export const pageReducer = (state = defaultState,action:pageAction):pageState => {
    switch (action.type){
        case "SET_GENERAL":
            return {...state, page:"General"};
        case "SET_FAVORITES":
            return {...state, page:"Favorites"};
        default:
            return state;
    }
}