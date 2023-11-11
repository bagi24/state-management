import { createStore, combineReducers } from "redux";

import { accountReducer } from "./features/accounts/AccountSlice";
import { customerReducer } from "./features/customers/CustomerSlice";

const rootReduser = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReduser);

export default store;
