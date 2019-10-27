function reducer(state, action) {
  if (action.type === 'ADD_WIDGET') {
    return {
      ...state,
      widgets: [ ...state.widgets, action.payload ],
    };
  }

  return {
    widgets: [
      'Alice',
      'Bob',
    ]
  };
}

export default reducer;
