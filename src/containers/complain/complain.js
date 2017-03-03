/**
 * Created by S jawwad hashmi on 3/3/2017.
 */
/**
 * Created by Admin on 12/28/2016.
 */
import React, { Component,PropTypes } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import UsersList from '../../components/userList/userList';
import LoginForm from '../../components/signinform/signinform'
import { reportsActions } from '../../action/reports';
import RaisedButton from 'material-ui/RaisedButton'
class complain extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
    }

    componentDidMount() {
        this.props.getComplain()

    }
    showUsersList(users) {
        if(!users) {
            return [];
        }
        console.log(users)
        return Object.keys(users).reduce(
            (list, uid) => {
                return [
                    ...list,
                    {
                        uid,
                        ...users[uid]
                    }
                ];
            }, []);

    }
    render () {

        const mainMenu = (

            <RaisedButton
                label='Thin Case is on pending'
                secondary={true}
                fullWidth={true}

            />

        )

        const rightMenu = this.props.auth.isAuthenticated == true && this.props.auth.user.role == "admin" ? (


                <RaisedButton
                    label='Case Approve'
                    primary={true}
                    onTouchTap={this.handleSubmit}
                />

            ) : mainMenu


        const { dispatch, complains ,auth } = this.props;

        return (
            <div>
                {
                    <div style={{display: 'inline-flex', margin: '20px'}}>


                        {

                            this.props.complains.isloaded ? this.showUsersList(this.props.complains.complainData).map(user =>

                                    <Card style={{width: '300px', marginLeft: '5px', marginRight: '30px'}}>


                                        <CardMedia
                                            overlay={<CardTitle title={user.reporterName} subtitle={user.caseNo}/>}
                                        >
                                            <img src={user.url2} style={{}}/>
                                        </CardMedia>
                                        <CardTitle style={{textDecoration:'none'}} title={
                                            <Link  style={{textDecoration:'none'}} to={`/${this.props.params.userid}/crimes/${user.uid}` }>
                                                {user.role}
                                            </Link>
                                        } subtitle={user.city}/>
                                        <CardText>

                                            {user.details}
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                        </CardText>
                                        {rightMenu}
                                    </Card>
                                ) : ''



                        }
                    </div>

                }


            </div>
        )
    }
}




const mapStateToProps = (state) => {
    console.log("users page "+state)
    return {

        auth: state.auth ,
        complains: state.complainData
    };
};

export default connect(mapStateToProps,reportsActions)(complain);