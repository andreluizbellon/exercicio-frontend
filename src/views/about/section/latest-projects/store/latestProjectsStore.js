import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    projects: null,
    loading: true,
}

export default createStore((state = initialState, action) => {
    if (action.type === 'SET_PROJECTS') {
        return {
            ...state,
            projects: action.projects,
            loading: false,
        };
    }

    return state;
}, applyMiddleware(thunk));
