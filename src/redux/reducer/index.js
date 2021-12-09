import { combineReducers } from "redux";
import { houseReducer, selectedHouseReducer, changePage } from "./houseReducer";

const reducers = combineReducers({
  allHouses: houseReducer,
  houses: selectedHouseReducer,
});

export default reducers;
