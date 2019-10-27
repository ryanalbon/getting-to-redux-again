function createStore(reducer, initialState) {
  let callback;
  let state = reducer(initialState, {});

  function dispatch(action) {
    state = reducer(state, action);
    callback(state);
  }

  return {
    getState: () => state,
    setCallback: cb => callback = cb,
    dispatch,
  }
}

export default createStore;
