import {listAction, Recipe} from "../../types/recipe";


const defaultState:Recipe[] = [

];

let idCounter = 1;

export const favoriteListReducer = (state = defaultState, action: listAction): Recipe[] => {
    switch (action.type) {
        case "ADD_FAVORITE_RECIPE":
            const updatedRecipe = { ...action.payload, id: idCounter++ }; // Создаем копию рецепта и устанавливаем новый айдишник
            return [...state, updatedRecipe];
        case "DELETE_FAVORITE_RECIPE":
            const recipeIdToDelete = action.payload.id;
            return state.filter((recipe) => recipe.id !== recipeIdToDelete);
        case "CHANGE_COOKING":
            const recipeIdToChange = action.payload.id;
            let updatedRecipeCooking:Recipe;
            if(action.payload.cooking){
                updatedRecipeCooking = { ...action.payload, cooking: false };
            }
            else{
                updatedRecipeCooking = { ...action.payload, cooking: true };
            }

            return  state.map((recipe) => {
                if (recipe.id === recipeIdToChange) {
                    return updatedRecipeCooking;
                }
                return recipe;
            });
        default:
            return state;
    }
}