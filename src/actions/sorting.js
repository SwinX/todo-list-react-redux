import ActionTypes from './types';

const setSorting = (sorting) => ({
    type: ActionTypes.SET_TODO_SORTING,
    sorting
});

export {
    setSorting
};
