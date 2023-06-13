export interface Recipe{
    name:string;
    ingredients:string[];
    actions:string[];
}

export interface listAction{
    type:string,
    payload?:Recipe,
}