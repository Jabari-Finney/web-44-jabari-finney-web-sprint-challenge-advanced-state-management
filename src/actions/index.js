import axios from 'axios';

export const SMURF_FETCH_START = "SMURF_FETCH_START"
export const SMURF_FETCH_SUCCESS = "SMURF_FETCH_SUCCESS"
/* export const SMURF_FETCH_FAILURE = "SMURF_FETCH_FAILURE" */
export const ADD_SMURF = "ADD_SMURF"
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE"
export const ERROR_MESSAGE = "ERROR_MESSAGE"

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const fetchSmurfs = () => (dispatch) => {
    dispatch(getSmurfsStart)
    axios.get('http://localhost:3333/smurfs')

    .then(res => {
        dispatch(getSmurfsSuccess(res.data))
    })

    .catch(err => {
        dispatch(errorMessage())
    })
    }
    const getSmurfsStart = () => {
        return ({type: SMURF_FETCH_START})
    }

    const getSmurfsSuccess = (smurfsData) => {
        return ({type: SMURF_FETCH_SUCCESS, payload: smurfsData})
    }

    export const errorMessage = () => {
        return ({type: ERROR_MESSAGE})
    }

    export const addSmurf = (data) => {
        return ({type: ADD_SMURF, payload: data})
    }
    
    export const setErrorMessage = (data) => {
        return ({type: SET_ERROR_MESSAGE, payload: data})
    }