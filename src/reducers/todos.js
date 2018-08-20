import ActionTypes from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO: {
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        }

        case ActionTypes.EDIT_TODO: {
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        text: action.text
                    };
                }

                return todo;
            });
        }

        case ActionTypes.TOGGLE_TODO: {
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }

                return todo;
            });
        }

        case ActionTypes.REMOVE_TODO: {
            return state.filter(todo => todo.id !== action.id);
        }

        default:
            return state;
    }
};
