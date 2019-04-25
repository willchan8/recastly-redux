import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';
import { handleVideoSearch } from '../../spec/reduxSpec/reduxMocks.jsx';

// mapStatetoProps: Function
// returned stateProps object is merged into the components props
const mapStateToProps = (state) => {
  // gets data from the current state and makes them available to the Search component as props
  return { 
    videos: state.videos,
    video: state.currentVideo
  };
};

// mapDispatchToProps: Function | Object
// returns 
const mapDispatchToProps = (dispatch) => {
  // should have prop called handleSearchInputChange which dispatches handleVideoSearch

  // gets _________ function and makes it available to the Search component (under this.props.actions)
  return {
    handleSearchInputChange: query => dispatch(handleVideoSearch(query))
  };
};

// passing mapStatetToProps subscribes the container component to the Redux store updates
var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
