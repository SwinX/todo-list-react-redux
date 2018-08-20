import {connect} from 'react-redux';

import TodoList from './list.jsx';

import {toggleTodo, removeTodo, showModal} from '../../actions';
import {TodoFormAction, ModalType} from '../../constants';

export const mapStateToProps = state => ({todos: state.todos});

export const mapDispatchToProps = (dispatch) => ({
    onAddItem: () => dispatch(
        showModal(
            ModalType.TODO_FORM,
            {action: TodoFormAction.CREATE}
        )
    ),

    onEditItem: todo => dispatch(
        showModal(
            ModalType.TODO_FORM,
            {action: TodoFormAction.EDIT, todo}
        )
    ),

    onToggleItem: todo => dispatch(toggleTodo(todo.id)),

    onRemoveItem: todo => dispatch(removeTodo(todo.id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
