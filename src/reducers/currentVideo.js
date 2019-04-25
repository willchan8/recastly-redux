import Redux from 'redux';
// I takes in state (object) and action (object)
// O state object
// C Reducer must be a pure function, cannot mutate its inputs
// E initial state/action === undefined
var currentVideoReducer = (state = null, action) => {
  // take in a state object/action object
  // example action object:
  // {
  //   type: 'CHANGE_VIDEO',
  //   video: video
  // }
  // only change state if the action is an appropriate action (must have CHANGE_VIDEO as type), must have a payload as video
  // return a new state object
  switch (action.type) {
    case 'CHANGE_VIDEO':
      return action.video
    default:
      return state
  }
  // TODO: define a reducer for the currentVideo field of our state.
};

export default currentVideoReducer;
