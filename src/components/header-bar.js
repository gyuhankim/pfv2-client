import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link, Redirect} from 'react-router-dom';


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
                <Link to="/resume" className="header-name">Joseph Kim</Link>
                <Link to="/"><img className="logo" src={logo} /></Link>
                <Link to="/projects" className="header-company">IRNWRKS</Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
