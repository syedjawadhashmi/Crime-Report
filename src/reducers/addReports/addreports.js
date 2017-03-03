/**
 * Created by S jawwad hashmi on 3/3/2017.
 */
import {
    ADDREPORT_PROCESS,
    ADDREPORT_PROCESS_SUCCESS,


} from '../../action/reports/action-types';


const InitalState = {
    isloaded:false,
    isProcessing:false,
    bookingData: null
};

export const addreportsReducer = function (state = InitalState, action) {

    switch (action.type) {

        case ADDREPORT_PROCESS:
            return Object.assign({}, state, { isProcessing: true });
        case ADDREPORT_PROCESS_SUCCESS:
            return Object.assign({}, state, { isloaded: true, parkingData: action.payload });

        default:
            return state;
    }
}

