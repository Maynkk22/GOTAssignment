import { ActionTypes } from "../constants/action-types";
import axios from "axios";
export const setHouses = (houses) => {
  return {
    type: ActionTypes.SET_HOUSES,
    payload: houses,
  };
};

export const selectedHouses = (houses) => {
  return {
    type: ActionTypes.SELECTED_HOUSES,
    payload: houses,
  };
};

export const removeSelectedHouses = (houses) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_HOUSES,
    payload: houses,
  };
};

export const nextPage = (payload) => {
  return {
    type: ActionTypes.NEXT_PAGE,
    payload: payload,
  };
};

export const prevPage = (payload) => {
  return {
    type: ActionTypes.PREV_PAGE,
    payload: payload,
  };
};
