import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  var options = {
    key: YOUTUBE_API_KEY, // Youtube API Key
    query: q, // takes query parameter
    max: 5 
  };
 
  return (dispatch) => {
    searchYouTube(options, (items) => {
      dispatch(changeVideoList(items)); // Dispatch changeVideoList
      dispatch(changeVideo(items[0])); // Dispatch changeVideo
    });
  };
};

export default handleVideoSearch;
