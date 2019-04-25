import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';
import { handleVideoSearch } from '../../spec/reduxSpec/reduxMocks.jsx';

// mapStatetoProps: Function
const mapStateToProps = (state) => {
  return { 
    videos: state.videoList,
    video: state.currentVideo
  };
};

// mapDispatchToProps?: Function | Object
const mapDispatchToProps = (dispatch) => {
  //should have prop called handleSearchInputChange which dispatches handleVideoSearch
  return {
    handleSearchInputChange: query => dispatch(handleVideoSearch(query))
  };
};

// Use 'connect' method to generate container 
var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
