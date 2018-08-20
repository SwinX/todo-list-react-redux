import {connect} from 'react-redux';

import TodoForm from './todo-form.jsx';

import {addTodo, editTodo} from '../../../actions';
import {TodoFormAction} from '../../../constants';

export const mapDispatchToProps = (dispatch, ownProps) => ({
    onSave: (text) => {
        const {todo, action} = ownProps;

        switch (action) {
            case TodoFormAction.CREATE: {
                return dispatch(addTodo(text));
            }

            case TodoFormAction.EDIT: {
                return dispatch(editTodo(todo.id, text));
            }
        }
    }
});

export const mergeProps = (undefined, dispatchProps, ownProps) => ({
    ...dispatchProps,
    text: ownProps.todo && ownProps.todo.text,
    onClose: ownProps.onClose
});

export default connect(
    undefined,
    mapDispatchToProps,
    mergeProps
)(TodoForm);
