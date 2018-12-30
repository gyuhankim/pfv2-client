import React from 'react';
import { connect } from 'react-redux';
import ProjectModal from './project-modal';
import {showModal} from '../actions/projects';

import launchpad from '../images/JPEG/launchpad.jpg';

import '../styles/projects-page.css';

export class ProjectsPage extends React.Component {

    render() {

        return (
            <div className="projects-page">
                
                <div className="projects-grid">
                
                    <div className="projects-project">
                        <img src={launchpad} className="projects-project-thumbnail" alt="project thumbnail" />
                        <h3 className="projects-project-title">LaunchPad.gg</h3>
                    </div>

                    <div className="projects-project">
                        <img src={launchpad} className="projects-project-thumbnail" alt="project thumbnail" />
                        <h3 className="projects-project-title">LaunchPad.gg</h3>
                    </div>

                    <div className="projects-project">
                        <img src={launchpad} className="projects-project-thumbnail" alt="project thumbnail" />
                        <h3 className="projects-project-title">LaunchPad.gg</h3>
                    </div>

                    <div className="projects-project">
                        <img src={launchpad} className="projects-project-thumbnail" alt="project thumbnail" />
                        <h3 className="projects-project-title">LaunchPad.gg</h3>
                    </div>

                    <div className="projects-project">
                        <img src={launchpad} className="projects-project-thumbnail" alt="project thumbnail" />
                        <h3 className="projects-project-title">LaunchPad.gg</h3>
                    </div>

                    <div className="projects-project">
                        <img src={launchpad} className="projects-project-thumbnail" alt="project thumbnail" />
                        <h3 className="projects-project-title">LaunchPad.gg</h3>
                    </div>

                    <div className="projects-project">
                        <img src={launchpad} className="projects-project-thumbnail" alt="project thumbnail" />
                        <h3 className="projects-project-title">LaunchPad.gg</h3>
                    </div>

                    <div className="projects-project">
                        <img src={launchpad} className="projects-project-thumbnail" alt="project thumbnail" />
                        <h3 className="projects-project-title">LaunchPad.gg</h3>
                    </div>

                    <div className="projects-project">
                        <img src={launchpad} className="projects-project-thumbnail" alt="project thumbnail" />
                        <h3 className="projects-project-title">LaunchPad.gg</h3>
                    </div>

                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(ProjectsPage);
