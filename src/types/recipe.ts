export interface Recipe{
    name:string;
    ingredients:string[];
    actions:string[];
    id:number;
}

export interface listAction{
    type:string,
    payload?:Recipe,
}