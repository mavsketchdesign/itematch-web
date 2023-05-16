import { USER_INFO } from "../actions/types";
import { USER_SIGNIN } from "../actions/types";
import { USER_SIGNUP } from "../actions/types";

const UserReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case USER_SIGNIN:
      return action.payload;
    case USER_SIGNUP:
      return action.payload;
    case USER_INFO:
      return action.payload;
    default:
      return state;
  }
};
export default UserReducer;
