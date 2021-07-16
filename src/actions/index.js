import axios from 'axios';

export const SMURF_FETCH_START = "SMURF_FETCH_START"
export const SMURF_FETCH_SUCCESS = "SMURF_FETCH_SUCCESS"
export const SMURF_FETCH_FAILURE = "SMURF_FETCH_FAILURE"
export const ADD_SMURF = "ADD_SMURF"
export const ERROR_MESSAGE = "ERROR_MESSAGE"

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.