/**
 * Created by S jawwad hashmi on 1/27/2017.
 */
import {
    GET_MISSING_PROCESS,
    GET_CRIME_PROCESS,
    GET_COMPLAIN_PROCESS,
    ADDREPORT_PROCESS
} from './action-types';

export function getMissing() {
    return {
        type: GET_MISSING_PROCESS
    };
}

export function getCrime() {
    return {
        type: GET_CRIME_PROCESS
    };
}

export function getComplain() {
    return {
        type: GET_COMPLAIN_PROCESS
    };
}


export function addReports(data) {
    return {
        type: ADDREPORT_PROCESS,
        payload:data
    };
}