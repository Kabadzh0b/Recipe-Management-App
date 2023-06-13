import {Recipe} from "../types/recipe";
import {useTypedSelector} from "../hooks/useTypedSelector";
import redCross from "../images/red-cross.png";
import {useDispatch} from "react-redux";
export const FavoriteList = () =>{
    const LIST:Recipe[] = useTypedSelector(state => state.favoriteList);
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Favorite Recipes List:</h1>
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
                        <div className="Flex-container">
                            <div onClick={()=>{dispatch({type:"DELETE_FAVORITE_RECIPE", payload:recipe})}}>
                                <img className="Red-cross" src = {redCross} alt = "red cross"/>
                            </div>
                            <button className="Start-cooking-btn">Start cooking!</button>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}