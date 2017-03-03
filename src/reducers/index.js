/**
 * Created by Admin on 12/28/2016.
 */
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { authReducer} from './auth/auth';
import { parkingReducer } from './parkingAreas/parkingAreas';
import { boookingReducer } from './booking/booking';
import { missingReducer } from './missing/missing';
import { crimeReducer } from './crime/crime';
import { complainReducer } from './complain/complain';
import { addreportsReducer } from './addReports/addreports';

export default combineReducers({
    routing: routerReducer,
    auth: authReducer,
    parkingData:parkingReducer,
    bookingData:boookingReducer,
    missingData:missingReducer,
    crimeData:crimeReducer,
    complainData:complainReducer,
    addreportsData:addreportsReducer

});


