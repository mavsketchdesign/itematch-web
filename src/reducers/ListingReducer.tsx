import { FETCH_LISTINGS } from "../actions/types";

const UserReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case FETCH_LISTINGS:
      return action.payload;
    default:
      return state;
  }
};
export default UserReducer;
