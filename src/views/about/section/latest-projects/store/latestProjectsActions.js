export function setProjects(projects) {
    return {
        type: 'SET_PROJECTS',
        projects,
    };
}

export function fetchAndSetProjects() {
    return function(dispatch) {
        fetch('http://localhost:3000/projects')
            .then((response) => response.json())
            .then((result) => {
            dispatch(setProjects(result));
        });
    }
}
