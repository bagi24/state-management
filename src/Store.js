import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/loanRequierd":
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
      };
  }
}

const Store = createStore(reducer);

Store.dispatch({ type: "account/deposit", payload: 500 });
Store.dispatch({ type: "account/withdraw", payload: 100 });
Store.dispatch({
  type: "account/loanRequierd",
  payload: { amount: 1000, purpuse: "buy a car" },
});
Store.dispatch({
  type: "account/loanPay",
  payload: { pay: 500 },
});

console.log(Store.getState());
