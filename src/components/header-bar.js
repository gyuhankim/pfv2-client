import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import logo from '../images/portfolio-logo.png';
import '../styles/header-bar.css';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {

        return (
            <div className="header-bar">
                <a className="header-name" href="#">Joseph Kim</a>
                <a href="#"><img className="logo" src={logo} /></a>
                <a className="header-company" href="#">IRNWRKS</a>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
