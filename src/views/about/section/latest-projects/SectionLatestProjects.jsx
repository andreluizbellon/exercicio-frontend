import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card } from '../../../../components';
import { fetchAndSetProjects } from './store/latestProjectsActions.js';
import LatestProjectsMainProject from './main-project/LatestProjectsMainProject.jsx';
import LatestProjectsSideProject from './side-project/LatestProjectsSideProject.jsx';

function renderProjects(projects, loading) {
    if (loading) {
        return 'Loading...';
    }

    return projects.map((project, index) => {
        if (index === 0) {
            return (
                <LatestProjectsMainProject project={project} />
            );
        }

        return (
            <LatestProjectsSideProject project={project} />
        );
    });
}

function SectionLatestProjects(props) {
    const { projects, loading, fetchAndSetProjects } = props;

    useEffect(() => {
        fetchAndSetProjects();
    }, []);

    return (
        <section>
            <Card title="Latest Projects">
                {renderProjects(projects, loading)}
            </Card>
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects,
        loading: state.loading,
    }
}
const mapDispatchToProps = {
    fetchAndSetProjects,
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionLatestProjects);
