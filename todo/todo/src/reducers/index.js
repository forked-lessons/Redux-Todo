const initialState = {
  todos: [
    { text: "Walk the dog.", completed: false },
    { text: "Do laundry.", completed: false }
  ]
};

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, title: action.payload };

    default:
      return state;
  }
}
export default reducer;
