/**
 * Created by S jawwad hashmi on 3/3/2017.
 */
/**
 * Created by S jawwad hashmi on 3/3/2017.
 */
import {
    GET_COMPLAIN_PROCESS_ERROR,
    GET_COMPLAIN_PROCESS_SUCCESS ,
    GET_COMPLAIN_PROCESS
} from '../../action/reports';


const InitalState = {
    isloaded:false,
    isProcessing:false,
    complainData: null
};

export const complainReducer = function (state = InitalState, action) {

    switch (action.type) {

        case GET_COMPLAIN_PROCESS:
            return Object.assign({}, state, { isProcessing: true });
        case GET_COMPLAIN_PROCESS_SUCCESS:
            return Object.assign({}, state, { isloaded: true, complainData: action.payload });



        default:
            return state;
    }
}

