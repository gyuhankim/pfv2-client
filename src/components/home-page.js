import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';


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
            <h2>testing</h2>

        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HomePage);
