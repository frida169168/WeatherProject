
import axios from 'axios'
import {locationsSearchUrl} from '../weatherAPI/config';

import {  
    LOCATIONS_LIST_REQUEST,
    LOCATIONS_LIST_SUCCESS,
    LOCATIONS_LIST_FAILED
} from '../constants/constantsSearch';
const headers = {
    'Content-Type': 'application/json',
    'X-Auth-Token': '97e0d315477f435489cf04904c9d0e6co',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With",

  };

async function getLocations(dispatch, userInput) {
    dispatch({
        type: LOCATIONS_LIST_REQUEST
    })
    try{
        const locations = await (await axios.get(locationsSearchUrl(userInput),headers))
        dispatch({
            type: LOCATIONS_LIST_SUCCESS,
            payload: locations.data
        })

    }catch(err){
        dispatch({
            type: LOCATIONS_LIST_FAILED,
            message: err.message || 'something went',
            payload: 'No access to AccuWeather API'
        })
    }
}

export const requestLoactions = userInput => (dispatch) => {
    getLocations(dispatch, userInput)
}

export const resetError = () => ({
    type: LOCATIONS_LIST_FAILED,
    payload: ''
})