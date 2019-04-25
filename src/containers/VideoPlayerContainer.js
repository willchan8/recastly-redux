import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

// var VideoPlayerContainer = () => {};

const mapStateToProps = (state) => {
	// gets data (currentVideo) from the current state and makes them available to the VideoPlayer component as a prop called video
	// should have a prop called video connected to the currentVideo in the store
	return {
		video: state.currentVideo
	}
}

const mapDispatchToProps = (dispatch) => {
	// 
	return {
    handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
  };
}

// passing mapStatetToProps subscribes the container component to the Redux store updates
var VideoPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
