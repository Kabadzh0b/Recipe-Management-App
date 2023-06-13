import React from "react";
import {useDispatch} from "react-redux";

export const Header = ()=>{
    const dispatch = useDispatch();
    return(
        <header className="App-header">
            <div className="Main-buttons-container">
                <div className="Header-main-button" onClick={()=>dispatch({type:"SET_GENERAL"})}>General recipes list</div>
                <div className="Header-main-button" onClick={()=>dispatch({type:"SET_FAVORITES"})}> Favorite recipes</div>
            </div>
        </header>
    )
}
