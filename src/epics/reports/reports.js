/**
 * Created by S jawwad hashmi on 3/3/2017.
 */
import { Observable } from "rxjs";

import { ActionsObservable } from "redux-observable";

import { browserHistory } from 'react-router'; // http://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router


import {
    GET_MISSING_PROCESS,
    GET_MISSING_PROCESS_SUCCESS,
    GET_CRIME_PROCESS,
    GET_CRIME_PROCESS_SUCCESS,
    GET_COMPLAIN_PROCESS,
    GET_COMPLAIN_PROCESS_SUCCESS,
    ADDREPORT_PROCESS,
    ADDREPORT_PROCESS_SUCCESS,
    GET_MISSING_PROCESS_ERROR,

} from '../../action/reports';

import firebase from 'firebase';
import { firebaseDb } from '../../config/firebase';




export const getMissingEpics = action$ =>
    action$.ofType(GET_MISSING_PROCESS)
        .switchMap(() => {
            return Observable.fromPromise(firebaseDb.ref('/').child(`missing`).once('value'))

                .map(u => {
                    return {
                        type: GET_MISSING_PROCESS_SUCCESS,
                        payload: u.val()

                    }

                });

        })

export const getCrimeEpics = action$ =>
    action$.ofType(GET_CRIME_PROCESS)
        .switchMap(() => {
            return Observable.fromPromise(firebaseDb.ref('/').child(`crime`).once('value'))

                .map(u => {
                    return {
                        type: GET_CRIME_PROCESS_SUCCESS,
                        payload: u.val()

                    }

                });

        })


export const getComplainEpics = action$ =>
    action$.ofType(GET_COMPLAIN_PROCESS)
        .switchMap(() => {
            return Observable.fromPromise(firebaseDb.ref('/').child(`complaints`).once('value'))

                .map(u => {
                    return {
                        type: GET_COMPLAIN_PROCESS_SUCCESS,
                        payload: u.val()

                    }

                });

        })



export const addReportsEpics = action$ =>
    action$.ofType(ADDREPORT_PROCESS)
        .switchMap(({payload}) => {



             if(payload.role == "Missing"){


                const data = {
                     reportedby:payload.reportedby,
                     caseNo:"Case No "+payload.caseNo,
                     reporterName:payload.name,
                     details:payload.details,
                     action:payload.action,
                     city:payload.city,
                     startingDate:payload.startDate,
                    url2:"http://deluxecafemoree.com.au/nsw/wp-content/uploads/2015/11/crime.jpg",
                     role:payload.role,
                     url:"http://beyondwordsdancecompany.com/wp-content/uploads/2014/12/beyond-words-dance-kayla-01.jpg",


                 }

                 return firebaseDb.ref('/').child(`missing`).push(data)
                     .then(d => {

                         return {
                             type: GET_MISSING_PROCESS,
                         };
                     })
             }
             if(payload.role == "Crime"){
                 const data={
                     reportedby:payload.reportedby,
                     caseNo:"Case No "+payload.caseNo,
                     reporterName:payload.name,
                     details:payload.details,
                     action:payload.action,
                     url2:"http://deluxecafemoree.com.au/nsw/wp-content/uploads/2015/11/crime.jpg",
                     city:payload.city,
                     startingDate:payload.startDate,
                     role:payload.role,
                     url:"http://engineering.unl.edu/images/staff/Kayla_Person-small.jpg",


                 }


                 return firebaseDb.ref('/').child(`crime`).push(data)
                     .then(d => {

                         return {
                             type: GET_CRIME_PROCESS,
                         };
                     })
             }
             if(payload.role == "Complaints"){

                 const data={
                     reportedby:payload.reportedby,
                     caseNo:"Case No "+payload.caseNo,
                     reporterName:payload.name,
                     details:payload.details,
                     action:payload.action,
                     url2:"http://deluxecafemoree.com.au/nsw/wp-content/uploads/2015/11/crime.jpg",
                     startingDate:payload.startDate,
                     city:payload.city,
                     role:payload.role,
                     url:"http://stanlemmens.nl/wp/wp-content/uploads/2014/07/bill-gates-wealthiest-person.jpg",


                 }


                 return firebaseDb.ref('/').child(`complaints`).push(data)
                     .then(d => {

                         return {
                             type: GET_COMPLAIN_PROCESS,
                         };
                     })
             }





        })