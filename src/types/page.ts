export interface pageState{
    page:string;
}

export interface pageAction{
    type:string,
    payload?:string,
}

export const defaultState:pageState = {
    page: "General",
}