import {useTypedSelector} from "../hooks/useTypedSelector";
import {GeneralList} from "./GeneralList";
import {FavoriteList} from "./FavoriteList";

export const List = () =>{

    const page = useTypedSelector(state => state.page.page);
    return(
        <>
            {page === "General" ? <GeneralList/> : <FavoriteList/>}
        </>
    )
}