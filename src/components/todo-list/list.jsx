import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import Header from './header.jsx';
import Row from './row.jsx';

import {SortingType} from '../../constants';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: '400px',
        backgroundColor: theme.palette.background.paper
    }
});

class TodoList extends React.Component {
    render() {
        const {classes, sorting, onAddItem, onToggleSorting} = this.props;
        const todos = this._sortedTodos();

        return (
            <div className={classes.root}>
                <List>
                    <Header
                        sorting={sorting}
                        onToggleSorting={onToggleSorting}
                        onAddItem={onAddItem}
                    />
                    {todos.map(todo => this._renderTodo(todo))}
                </List>
            </div>
        );
    }

    _sortedTodos() {
        const {todos, sorting} = this.props;

        switch (sorting) {
            case SortingType.ASCENDING: {
                return todos.sort((first, second) => first.text > second.text ? 1 : -1);
            }

            case SortingType.DESCENDING: {
                return todos.sort((first, second) => first.text < second.text ? 1 : -1);
            }

            default: {
                return todos;
            }
        }
    }

    _renderTodo = (todo) => {
        const {onEditItem, onRemoveItem, onToggleItem} = this.props;

        return (
            <Row
                key={todo.id}
                todo={todo}
                onEditItem={onEditItem}
                onRemoveItem={onRemoveItem}
                onToggleItem={onToggleItem}
            />
        );
    }
}

TodoList.propTypes = {
    classes: PropTypes.object.isRequired,
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            text: PropTypes.string,
            completed: PropTypes.boolean
        })
    ).isRequired,
    sorting: PropTypes.string.isRequired,
    onAddItem: PropTypes.func,
    onEditItem: PropTypes.func,
    onRemoveItem: PropTypes.func,
    onToggleItem: PropTypes.func,
    onToggleSorting: PropTypes.func
};

export default withStyles(styles)(TodoList);
