import {listAction, Recipe} from "../../types/recipe";


const defaultState:Recipe[] = [

];

let idCounter = 1;

export const favoriteListReducer = (state = defaultState, action: listAction): (Recipe | undefined)[] => {
    switch (action.type) {
        case "ADD_FAVORITE_RECIPE":
            if (action.payload) {
                const updatedRecipe = { ...action.payload, id: idCounter++ }; // Создаем копию рецепта и устанавливаем новый айдишник
                return [...state, updatedRecipe];
            }
            return state;
        case "DELETE_FAVORITE_RECIPE":
            const recipeIdToDelete = action.payload?.id;
            if (recipeIdToDelete) {
                return state.filter((recipe) => recipe.id !== recipeIdToDelete);
            }
            return state;
        default:
            return state;
    }
}