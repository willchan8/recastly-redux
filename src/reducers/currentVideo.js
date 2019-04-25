import Redux from 'redux';
// I takes in state (object) and action (object)
// O state object
// C Reducer must be a pure function, cannot mutate its inputs
// E initial state/action === undefined
var currentVideoReducer = (state = null, action) => {
  // Reducers specify how the app's state changes in response 
  // to actions sent to the store
  switch (action.type) {
    case 'CHANGE_VIDEO':
      return action.video
    default:
      return state
  }
  // TODO: define a reducer for the currentVideo field of our state.
};

export default currentVideoReducer;
