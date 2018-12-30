import React from 'react';
import { hideModal } from '../actions/projects';
import { connect } from 'react-redux';

import ss from '../images/JPEG/ktss.jpg';

export class ProjectModal extends React.Component {

  checkWhereClicked(component) {
    if (component === 'modal-container') {
      this.props.dispatch(hideModal());
    }
  }

  render() {
    
    if (!this.props.modalHidden) {

      switch(this.props.project) {

        case 'LaunchPad.gg':
        return (
          <div className="modal-container" onClick={e => this.checkWhereClicked(e.target.className)}>
            <div className="project-modal">

              <div className="project-title">
                <h2>{this.props.project}</h2>
              </div>

              <img className="project-screenshot" src={ss} alt="project-screenshot" />

              <div className="project-links">
                <a className="project-link" href="https://mysterious-sands-19667.herokuapp.com/" target="_blank" rel="noopener noreferrer">Visit Site</a>
                <a className="project-link" href="https://github.com/gyuhankim/launchpad-client" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>

              <div className="project-description">
                <h3>Description</h3>
                <p>A webapp designed to spotlight upcoming video game release dates. Building value for users by providing one singular 
                  source with a clean and simple interface to view and track the games they're most excited for.</p>
              </div>

              <div className="project-technology">
                <h3>Front-End Stack</h3>
                <p>React</p>
                <p>Redux</p>

                <h3>Back-End Stack</h3>
                <p>NodeJS</p>
                <p>MongoDB</p>

                <h3>Tech</h3>
                <a href="https://www.igdb.com/" target="_blank" rel="noopener noreferrer">IGDB API</a>
              </div>

            </div>
          </div>
        )

        default:
        return null;

      }

    }

  }
  
}