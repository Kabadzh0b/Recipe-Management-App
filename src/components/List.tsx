import {useTypedSelector} from "../hooks/useTypedSelector";
import {GeneralList} from "./GeneralList";
import {FavoriteList} from "./FavoriteList";


export const List = () =>{

    let page = useTypedSelector(state => state.page);
    console.log(page);
    return(
        <>
            {page.page === "General" ? <GeneralList/> : <FavoriteList/>}
        </>
    )
}