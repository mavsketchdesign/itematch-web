import { FETCH_SPECIFIC_LISTING } from "../actions/types";

const UserReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case FETCH_SPECIFIC_LISTING:
      return action.payload;
    default:
      return state;
  }
};
export default UserReducer;
