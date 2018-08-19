import {SortingTypes} from '../constants';
import ActionTypes from '../actions/types';

export default (state = SortingTypes.ASCENDING, action) => {
    switch (action.type) {
        case ActionTypes.SET_TODO_SORTING: {
            return action.sorting;
        }

        default: {
            return state;
        }
    }
};
