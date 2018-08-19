import {SortingType} from '../constants';
import ActionTypes from '../actions/types';

export default (state = SortingType.ASCENDING, action) => {
    switch (action.type) {
        case ActionTypes.SET_TODO_SORTING: {
            return action.sorting;
        }

        default: {
            return state;
        }
    }
};
