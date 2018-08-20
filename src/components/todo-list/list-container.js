import {connect} from 'react-redux';

import TodoList from './list.jsx';

import {toggleTodo, removeTodo, showModal, setSorting} from '../../actions';
import {TodoFormAction, ModalType, SortingType} from '../../constants';

export const mapStateToProps = state => ({
    todos: state.todos,
    sorting: state.sorting
});

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

    onRemoveItem: todo => dispatch(removeTodo(todo.id)),

    changeSorting: sorting => {
        console.log('set sorting');
        dispatch(setSorting(sorting));
    }
});

export const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    onToggleSorting: () => {
        const {sorting} = stateProps;
        const newSorting = sorting === SortingType.ASCENDING
            ? SortingType.DESCENDING
            : SortingType.ASCENDING;

        return dispatchProps.changeSorting(newSorting);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(TodoList);
