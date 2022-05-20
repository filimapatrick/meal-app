import {ActionType} from './ActionType';


export const setMeals =(meals)=>{
    return {
        type: ActionType.SET_MEAL_LIST,
        payload:meals,
    }
    }
