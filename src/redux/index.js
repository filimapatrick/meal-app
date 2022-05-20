import { combineReducers } from "redux";
import { MealReducer } from "../redux/MealReducer";


const Reducers = combineReducers({
    allMeal: MealReducer,
});
export default Reducers;