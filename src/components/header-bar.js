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
                <div className="header-link">      
                    <Link to="/" className="header-home">Home</Link>
                </div>

                <div className="header-link">
                    <Link to="/resume" className="header-resume">Résumé</Link>
                </div>

                <Link to="/"><img className="logo" src={logo} /></Link>

                <div className="header-link">
                    <Link to="/projects" className="header-projects">Projects</Link>
                </div>

                <div className="header-link">
                    <a href="https://www.ironworksdigital.com" className="header-company">IRNWRKS</a>
                </div>    
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
