import axios from 'axios';


export const FETCH_FRIEND_START = 'FETCH_FRIEND';
export const FETCH_FRIEND = 'FETCH_FRIEND';
export const FETCH_FRIEND_SUCCESS = 'FETCH_FRIEND';
export const FETCH_FRIEND_ERROR = 'FETCH_FRIEND';


export const friendActionHandler = () => dispatch =>{
    axios
        .get('')
        .then()
        .catch()
}