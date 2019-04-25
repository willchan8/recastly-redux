import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  // Reducers specify how the app's state changes in response 
  // to actions sent to the store
  // Takes in dispatched previous state and actions
  switch (action.type) {
    case 'CHANGE_VIDEO_LIST':
      return action.videos
    default:
      return state
  }
};

export default videoListReducer;
