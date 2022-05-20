import { ActionType } from "./ActionType";

const initialState = {
    meals: [],
};


export const MealReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case ActionType.SET_MEAL_LIST:
            return {
                ...state,
                meals:payload,
            };
        default:
            return state;
    }
}