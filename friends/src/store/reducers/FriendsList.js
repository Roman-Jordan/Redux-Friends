import {
    FETCH_FRIEND_START, 
    FETCH_FRIENDS, 
    FETCH_FRIEND_ERROR,
    FETCH_FRIEND_SUCCESS
  } from '../actions';
  
  const initialState = {
    photoOfTheDay: null,
    error: '',
    isLoading: false
  };
  
  function friendsReducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
      case FETCH_FRIEND_START:
        return{
            fetchFriendsStart:'Initial Load'
        }
      case FETCH_FRIENDS:
        return{
            fetchFriends:'Fetching Friends',
        }
      case FETCH_FRIEND_ERROR:
        return{
            error:'error',
        }
      case FETCH_FRIEND_SUCCESS:
        return {
         fetchFriendsSuccess:   'success',
        }
      default:
        return state;
    }
  }
  
  export default friendsReducer;
  