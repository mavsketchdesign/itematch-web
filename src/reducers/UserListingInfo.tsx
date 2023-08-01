import { FETCH_USER_LIST_INFO } from "../actions/types";

const UserReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case FETCH_USER_LIST_INFO:
      return action.payload;
    default:
      return state;
  }
};
export default UserReducer;
