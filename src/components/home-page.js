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

                <div className="home-about-section">

                    <div className="home-about-title">
                        <h2>ABOUT ME</h2>
                    </div>

                    <div className="home-about-preface">
                        <p>My name is <span className="bold">Joseph Kim</span> and thanks for checking out my portfolio!</p>
                    </div>

                        <p>I'm a full-stack developer based in Atlanta who was featured on <span> </span>
                            <a href="https://hypepotamus.com/people/joseph-kim/" target="_blank" rel="noopener noreferrer">
                                <span className="bold">Hypepotamus as a rising tech talent.</span>
                            </a>
                        </p>
                        
                        <p>When I'm not coding up a website, you'll find me hard at work developing video games on Unity and 
                           GameMaker Studio or 3D modeling on Blender and Maya.
                           My stack of choice is NodeJS, React and Redux but I'm always hungry to learn new technologies!
                        </p>

                </div>

                <div className="home-skills-section">

                    <div className="home-about-title">
                        <h2>SKILLS</h2>
                    </div>

                    <div className="home-skills-frontend home-skills">

                        <div className="home-skills-header">
                            <i className="far fa-window-maximize fa-3x"></i>
                            <h3>Front-End</h3>
                        </div>
                        
                        <div className="home-skills-list">
                            <p>JavaScript / ES6</p>
                            <p>React</p>
                            <p>Redux</p>
                            <p>jQuery</p>
                            <p>HTML5</p>
                            <p>SASS/CSS3</p>
                        </div>
                        
                    </div>

                    <div className="home-skills-backend home-skills">

                        <div className="home-skills-header">
                            <i className="fas fa-project-diagram fa-3x"></i>
                            <h3>Back-End</h3>
                        </div>

                        <div className="home-skills-list">
                            <p>NodeJS</p>
                            <p>ExpressJS</p>
                            <p>MongoDB</p>
                            <p>PostreSQL</p>
                            <p>GraphQL</p>
                            <p>Python</p>
                        </div>
                        
                    </div>

                    <div className="home-skills-tools home-skills">

                        <div className="home-skills-header">
                            <i className="fas fa-cube fa-3x"></i>
                            <h3>Tools & Tech</h3>
                        </div>

                        <div className="home-skills-list">
                            <p>Github</p>
                            <p>Heroku</p>
                            <p>AWS</p>
                            <p>Bootstrap</p>
                            <p>Visual Studio Code</p>
                            <p>Unity3D / C#</p>
                        </div>
                        
                    </div>

                </div>

                <div className="contact-list">

                    <div className="contact-list-item">
                        <a href="mailto:gyuhankim@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-link"><i className="fab fa-google fa-lg"></i></a>
                        <a href="mailto:gyuhankim@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-link">gyuhankim@gmail.com</a>
                    </div>

                    <div className="contact-list-item">
                        <a href="https://github.com/gyuhankim" target="_blank" rel="noopener noreferrer" className="contact-link"><i className="fab fa-github-square fa-lg"></i></a>
                        <a href="https://github.com/gyuhankim" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
                    </div>

                    <div className="contact-list-item">
                        <a href="https://www.linkedin.com/in/joseph-kim-1b4ba6125/" target="_blank" rel="noopener noreferrer" className="contact-link"><i className="fab fa-linkedin fa-lg"></i></a>
                        <a href="https://www.linkedin.com/in/joseph-kim-1b4ba6125/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
                    </div>
                    
                </div>

            </div>
            

        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HomePage);
