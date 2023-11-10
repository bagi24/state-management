const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};
export function accountReducer(state = initialStateAccount, action) {
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

export function deposite(amount) {
  return { type: "account/deposit", payload: amount };
}

export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

export function loanRequierd(amount, purpuse) {
  return {
    type: "account/loanRequierd",
    payload: { amount, purpuse },
  };
}

export function loanPay(pay) {
  return {
    type: "account/loanPay",
    payload: { pay },
  };
}
