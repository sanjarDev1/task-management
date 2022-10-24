const completedReducer = (
  state = [
    { id: 1, text: 'test' },
    { id: 2, text: 'test' },
    { id: 3, text: 'test' },
  ],
  action
) => {
  switch (action.type) {
    case 'ADD_COMPLETED':
      if (action.payload.id) {
        state = state.map((item) =>
          item.id === action.payload.id
            ? { ...item, text: action.payload.text }
            : item
        );
      } else {
        let newDegree = {
          id: state.length + 1,
          text: action.payload.text,
        };
        state = [...state, { ...newDegree }];
      }
      break;
    case 'REMOVE_COMPLETED':
      state = state.filter((i) => i.id !== action.payload);
  }
  return state;
};

export default completedReducer;
