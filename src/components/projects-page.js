import React from 'react';
import {connect} from 'react-redux';

import '../styles/projects-page.css';

export class ProjectsPage extends React.Component {

    render() {

        return (
            <div className="projects-page">
                hello
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(ProjectsPage);
