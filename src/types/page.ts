export interface pageState{
    page: "General" | "Favorite";
}

export interface pageAction{
    type:string,
    payload?:string,
}

