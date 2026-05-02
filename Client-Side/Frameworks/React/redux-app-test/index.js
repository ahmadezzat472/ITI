import * as redux from "redux";
// actions
function CreatePolicy(name, amount) {
  return {
    type: "CREATE_POLICY",
    payload: { name, amount },
  };
}
function CreateClaim(name, amount) {
  return {
    type: "CREATE_CLAIM",
    payload: { name, amount },
  };
}

// reducers
let callCount = 0;

function policiesReducer(state = [], action) {
  callCount++;
  console.log(
    `policiesReducer called ${callCount} time(s) — action: ${action.type}`,
  );

  switch (action.type) {
    case "CREATE_POLICY":
      return [...state, action.payload];
    default:
      return state;
  }
}

function claimsReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_CLAIM":
      return [...state, action.payload];
    default:
      return state;
  }
}
// store
const rootReducer = redux.combineReducers({
  policies: policiesReducer,
  claims: claimsReducer,
});

const store = redux.legacy_createStore(rootReducer);

// dispatching actions
// store.dispatch(CreatePolicy('John Doe', 1000))
store.dispatch(CreateClaim("John Doe", 500));
console.log(store.getState());

//! Task
// Print the number of calls in the action function, expected to be called many times ?!
