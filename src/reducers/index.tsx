import { combineReducers } from "redux";

import UserReducer from "./UserReducer";
import ListingReducer from "./ListingReducer";
import ListingSpecificReducer from "./ListingSpecificReducer";
import UserListingInfo from "./UserListingInfo";

const rootReducer = combineReducers({
  user: UserReducer,
  listings: ListingReducer,
  SpecificListing: ListingSpecificReducer,
  userListingInfo: UserListingInfo
});

export default rootReducer;
