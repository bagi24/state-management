import { createStore, combineReducers } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/loanRequierd":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        balance: state.balance + action.payload.amount,
        loanPurpose: action.payload.purpuse,
      };

    case "account/loanPay":
      return {
        ...state,
        loan: state.loan - action.payload.pay,
        balance: state.balance - action.payload.pay,
        loanPurpose: "",
      };
    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
}

const rootReduser = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReduser);

// Store.dispatch({ type: "account/deposit", payload: 500 });
// Store.dispatch({ type: "account/withdraw", payload: 100 });
// Store.dispatch({
//   type: "account/loanRequierd",
//   payload: { amount: 1000, purpuse: "buy a car" },
// });
// Store.dispatch({
//   type: "account/loanPay",
//   payload: { pay: 500 },
// });

// console.log(Store.getState());

function deposite(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function loanRequierd(amount, purpuse) {
  return {
    type: "account/loanRequierd",
    payload: { amount, purpuse },
  };
}

function loanPay(pay) {
  return {
    type: "account/loanPay",
    payload: { pay },
  };
}

store.dispatch(deposite(800));
store.dispatch(withdraw(400));
store.dispatch(loanRequierd(500, "buy a new Home"));
store.dispatch(loanPay(100));
console.log(store.getState());

function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}

store.dispatch(createCustomer("bagrat injgia", "77777"));

console.log(store.getState());
