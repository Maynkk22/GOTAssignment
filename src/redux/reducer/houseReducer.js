import { ActionTypes } from "../constants/action-types";

const initialState = {
  houses: [],
  pageNumber: 1,
};

export const houseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_HOUSES:
      return { ...state, houses: payload };
    case ActionTypes.NEXT_PAGE:
      return { ...state, houses: payload, pageNumber: state.pageNumber + 1 };
    case ActionTypes.PREV_PAGE:
      return { ...state, houses: payload, pageNumber: state.pageNumber - 1 };
    default:
      return state;
  }
};

export const selectedHouseReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_HOUSES:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_HOUSES:
      return {};
    default:
      return state;
  }
};

// export const changePage = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.NEXT_PAGE:
//       return { ...state, houses: payload, pageNumber: state.pageNumber + 1 };
//     default:
//       return state;
//   }
// };
