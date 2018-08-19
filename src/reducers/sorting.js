import {SortingTypes} from '../constants';
import ActionTypes from '../actions/types';

const initialState = SortingTypes.ASCENDING;

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_TODO_SORTING: {
            return action.sorting;
        }

        default: {
            return state;
        }
    }
};
