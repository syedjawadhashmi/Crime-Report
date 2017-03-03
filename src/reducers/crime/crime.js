/**
 * Created by S jawwad hashmi on 3/3/2017.
 */
import {
    GET_CRIME_PROCESS_ERROR,
    GET_CRIME_PROCESS_SUCCESS ,
    GET_CRIME_PROCESS
} from '../../action/reports';


const InitalState = {
    isloaded:false,
    isProcessing:false,
    crimeData: null
};

export const crimeReducer = function (state = InitalState, action) {

    switch (action.type) {

        case GET_CRIME_PROCESS:
            return Object.assign({}, state, { isProcessing: true });
        case GET_CRIME_PROCESS_SUCCESS:
            return Object.assign({}, state, { isloaded: true, crimeData: action.payload });



        default:
            return state;
    }
}

