import React from 'react';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import reducers from './store/reducers';
const store = createStore(reducers,applyMiddleware(thunk))

function App() {
  return (
    <div> Hello </div>
  );
}

const mapStateToProps = state => {
  return {
    fetchingFriends:state.friends.fetchingFriends,
    friends:state.friends.friends
  }
}

export default App;
