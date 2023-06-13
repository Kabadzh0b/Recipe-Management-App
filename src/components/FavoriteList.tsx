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
                            {recipe.ingredients.map((ingredient,index)=>(
                                <p className = {recipe.cooking ? recipe.markedIngredients[index] ? "Marked" : "Can-be-marked" : ""}
                                onClick={()=>{
                                    if(recipe.cooking){
                                       recipe.markedIngredients[index] = !recipe.markedIngredients[index];
                                       dispatch({type:"MARK", payload:recipe});
                                    }
                                }}
                                >{ingredient}</p>
                            ))}
                        </div>
                        <div>
                            <b>Actions:</b>
                            {recipe.actions.map((action, index)=>(
                                <p className = {recipe.cooking ? recipe.markedActions[index] ? "Marked" : "Can-be-marked" : ""}
                                   onClick={()=>{
                                       if(recipe.cooking){
                                           recipe.markedActions[index] = !recipe.markedActions[index];
                                           dispatch({type:"MARK", payload:recipe});
                                       }
                                   }}
                                >{action}</p>
                            ))}
                        </div>
                        <div className="Flex-container">
                            <div onClick={()=>{dispatch({type:"DELETE_FAVORITE_RECIPE", payload:recipe})}}>
                                <img className="Red-cross" src = {redCross} alt = "red cross"/>
                            </div>
                            <button className = {!recipe.cooking ? "Start-cooking-btn" : "End-cooking-btn"} onClick={()=>{
                                dispatch({type:"CHANGE_COOKING",payload:recipe});
                            }}>{!recipe.cooking ? "Start cooking!" : "End cooking"}</button>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}