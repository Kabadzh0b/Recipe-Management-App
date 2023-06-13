export interface Recipe{
    name:string;
    ingredients:string[];
    actions:string[];
    id:number;
    cooking:boolean;
    markedIngredients:boolean[];
    markedActions:boolean[];
}

export interface listAction{
    type:string,
    payload:Recipe,
}