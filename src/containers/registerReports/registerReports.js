/**
 * Created by S jawwad hashmi on 3/3/2017.
 */
import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/TextField'

import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
const fieldStyle = { width: '80%' }
const buttonStyle = { width: '100%' }
import { connect } from 'react-redux'
import { Link } from 'react-router'

import {browserHistory} from 'react-router';
import { reportsActions } from '../../action/reports';

// Components
import SignupForm from '../../components/SignupForm/SignupForm'
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton'


class registerReports extends Component {

    static propTypes = {

        addReports: PropTypes.func.isRequired
    }

    state = {
        snackCanOpen: false,
        errors: { username: null, password: null }
    }



    reset = () =>
        this.setState({
            errors: {},
            firstName: null,
            email: null,
            lastName: null
        })

    handleSignup = () => {
        this.props.addReports(this.state)
        browserHistory.push('/'+this.props.auth.auth.user.uid);
    }

    _handleStartDate = (event, date) => {

        var currentState = this.state;
        currentState.startDate = date;
        currentState.reportedby = this.props.auth.auth.user.uid;
        this.setState(currentState);

    };
     handleChange = (event, index, value) =>

     this.setState(
     {value:value
     ,role:event.nativeEvent.target.innerText
     });

    render () {
            const items = [
         <MenuItem key={1} value={1} primaryText="Missing" />,
         <MenuItem key={2} value={2} primaryText="Complaints" />,
         <MenuItem key={3} value={3} primaryText="Crime" />,
         ];
        return (
            <div className='Login' style={{marginLeft: '340px',marginTop: '67px',width: '50%'}}>
                <Paper className='Login-Panel'>
                    <form style={{padding: '16px',margin:'0px'}} className='LoginForm'  onSubmit={this.handleSignup}>

                        <TextField
                            hintText='Case No'
                            floatingLabelText='Case No'
                            onChange={({ target }) => { this.setState({caseNo: target.value}) }}
                            style={fieldStyle}/>
                        <TextField
                            hintText='Reporter Name'
                            floatingLabelText='Reporter Name'
                            onChange={({ target }) => { this.setState({name: target.value}) }}
                            style={fieldStyle}/>

                        <TextField
                            hintText='Action Taken'
                            floatingLabelText='Action Taken'
                            onChange={({ target }) => { this.setState({action: target.value}) }}
                            style={fieldStyle}
                        />
                        <TextField
                            hintText='City'
                            floatingLabelText='City'
                            onChange={({ target }) => { this.setState({city: target.value}) }}
                            style={fieldStyle}
                        />
                        <TextField
                            hintText='Details'
                            floatingLabelText='Details'
                            onChange={({ target }) => { this.setState({details: target.value}) }}
                            style={fieldStyle}
                        />
                        <DatePicker
                            hintText="Crime Date" value={this.state.startDate}  onChange={this._handleStartDate}  mode="landscape" />

                        <SelectField
                         value={this.state.value}
                         onChange={this.handleChange}
                         floatingLabelText="Add your Report Type"
                         floatingLabelFixed={true}
                         hintText="Report Types"
                         >
                         {items}
                         </SelectField>

                        <div className='LoginForm-Submit'>
                            <RaisedButton
                                label='Register Reports'
                                primary
                                type='submit'
                                style={buttonStyle}
                            />
                        </div>
                    </form>
                </Paper>
            </div>
        )
    }



}

const mapStateToProps = (state) => {
    //console.log(state)
    return { auth: state };
};
//=====================================
//  CONNECT
//-------------------------------------

export default connect(mapStateToProps, reportsActions)(registerReports);