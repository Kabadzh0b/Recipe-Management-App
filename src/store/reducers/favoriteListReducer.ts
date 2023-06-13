import {listAction, Recipe} from "../../types/recipe";


const defaultState:Recipe[] = [

];

export const favoriteListReducer = (state = defaultState, action: listAction): (Recipe | undefined)[] => {
    switch (action.type) {
        case "ADD_FAVORITE_RECIPE":
            return [...state, action.payload]; // Добавляем новый рецепт в массив состояния
        default:
            return state;
    }
}