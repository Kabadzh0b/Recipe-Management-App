import {pageAction, pageState} from "../../types/page";

export const defaultState:pageState = {
    page: "General",
}

export const pageReducer = (state = defaultState,action:pageAction):pageState => {
    switch (action.type){
        case "SET_GENERAL":
            console.log(state);
            return {...state, page:"General"};
        case "SET_FAVORITES":
            console.log(state);
            return {...state, page:"Favorite"};

        default:
            return state;
    }
}