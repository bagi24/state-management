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
  }
}

const Store = createStore(reducer);

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

Store.dispatch(deposite(800));
Store.dispatch(withdraw(400));
Store.dispatch(loanRequierd(500, "buy a new Home"));
Store.dispatch(loanPay(100));
console.log(Store.getState());
