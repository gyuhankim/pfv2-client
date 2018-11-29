import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import hypepotamusLogo from '../images/hypepotamus-logo2.png';
import backgroundImage from '../images/jkim1(bottomfade).jpg';
import '../styles/home-page.css';

export function HomePage(props) {
    // If we are logged in redirect straight to the user's dashboard
    // if (props.loggedIn) {
    //     return <Redirect to="/dashboard" />;
    // }

    return (
        <div className="home">
            <img className="bg-image" src={backgroundImage} /> 

            <div className="home-main-content">

                {/* <div className="hypepotamus-feature">
                    <p>Featured Tech Talent</p>
                    <div> 
                        <img src={hypepotamusLogo} className="hypepotamus-logo"/>
                    </div>
                </div> */}

                <div className="home-summary">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            

        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HomePage);
