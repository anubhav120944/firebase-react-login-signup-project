import { GET_EMAIL } from "./action";

const initialState = {
  email: "",
};

export const useReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    default:
      return state;
  }
};
