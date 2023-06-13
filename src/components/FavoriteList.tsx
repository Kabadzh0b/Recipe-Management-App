import {Recipe} from "../types/recipe";
import {useTypedSelector} from "../hooks/useTypedSelector";


export const FavoriteList = () =>{
    const LIST:Recipe[] = useTypedSelector(state => state.favoriteList);
    return(
        <div>
            <div>
                <h1>Recipes List:</h1>
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
                    </div>
                ))}
            </div>
        </div>
    )
}