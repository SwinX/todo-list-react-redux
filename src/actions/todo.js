import ActionType from './types';

const addTodo = (text) => ({
    type: ActionType.ADD_TODO,
    id: String(Date.now()),
    text
});

const editTodo = (id, text) => ({
    type: ActionType.EDIT_TODO,
    id,
    text
});

const toggleTodo = (id) => ({
    type: ActionType.TOGGLE_TODO,
    id
});

const removeTodo = (id) => ({
    type: ActionType.REMOVE_TODO,
    id
});

export {
    addTodo,
    editTodo,
    toggleTodo,
    removeTodo
};
