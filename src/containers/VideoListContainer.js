import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

  // function that returns either a plain object or another function
  // returned stateProps object is merged into the components props
const mapStateToProps = (state) => {
  // gets data from the current state and makes them available to the VideoList 
  // component as a prop called videos
  return {
    videos: state.videoList
  };
};

const mapDispatchToProps = (dispatch) => {
  // Should have a prop called handleVideoListEntryTitleClick 
  // which dispatches changeVideo
  return {
    handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
  };
};

// passing mapStatetToProps subscribes the container component to the Redux store updates
var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
