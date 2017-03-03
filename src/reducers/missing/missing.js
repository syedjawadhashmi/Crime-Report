/**
 * Created by S jawwad hashmi on 3/3/2017.
 */

import {
    GET_MISSING_PROCESS_ERROR,
    GET_MISSING_PROCESS_SUCCESS ,
    GET_MISSING_PROCESS
} from '../../action/reports';


const InitalState = {
    isloaded:false,
    isProcessing:false,
    missingData: null
};

export const missingReducer = function (state = InitalState, action) {

    switch (action.type) {

        case GET_MISSING_PROCESS:
            return Object.assign({}, state, { isProcessing: true });
        case GET_MISSING_PROCESS_SUCCESS:
            return Object.assign({}, state, { isloaded: true, missingData: action.payload });



        default:
            return state;
    }
}

