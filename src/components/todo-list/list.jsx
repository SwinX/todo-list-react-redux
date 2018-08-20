import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import Header from './header.jsx';
import Row from './row.jsx';

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
        const {classes, todos, sorting, onAddItem, onToggleSorting} = this.props;

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
    onAddItem: PropTypes.func.isRequired,
    onEditItem: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
    onToggleItem: PropTypes.func.isRequired,
    onToggleSorting: PropTypes.func.isRequired
};

export default withStyles(styles)(TodoList);
