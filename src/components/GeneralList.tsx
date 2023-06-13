import {Recipe} from "../types/recipe";
import {useDispatch} from "react-redux";

export const GeneralList = ()=>{
    const LIST:Recipe[] = [{
        name:"Chicken Soup",
        ingredients:["Chicken", "Vegetables", "Seasonings"],
        actions:[
            "1. Make the stock by boiling the chicken and veggies until the meat is falling off the bone.",
            "2. Remove the chicken and cut into pieces (discard skin and bones).",
            "3. Strain the vegetables (reserving the stock) and cut into pieces. Rinse the pot.",
            "4. Return everything to the pot. Heat the soup through and season to taste."
        ],
        id:Math.random(),
        cooking:false,
    }];

    const dispatch = useDispatch();

    return(
        <div>
            <h1>General Recipes List:</h1>
            <div className="Recipe-list">
                {LIST.map((recipe)=> (
                    <div className="Recipe">
                        <div>
                            <b>{recipe.name}</b>
                        </div>
                        <div>
                            <b>Ingredients:</b>
                            {recipe.ingredients.map((ingredient)=>(
                                <p>{ingredient}</p>
                            ))}
                        </div>
                        <div>
                            <b>Actions:</b>
                            {recipe.actions.map((action)=>(
                                <p>{action}</p>
                            ))}
                        </div>
                        <button onClick={() => {dispatch({type:"ADD_FAVORITE_RECIPE", payload:recipe})}}>Add to favorites</button>
                    </div>
                ))}
            </div>
        </div>
    )
}