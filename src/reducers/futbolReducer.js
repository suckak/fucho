import {actions} from '../utils/constans';

const INITIAL_STATE = {
    competitions : []
};

const futbolReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {

        case actions.GET_COMPETITIONS:
            console.log(action);
            return {
                ...state,
                competitions : action.data
            };
            break;

        default:
            return state;

    }
};

export default futbolReducer;