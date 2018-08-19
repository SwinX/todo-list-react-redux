import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Row from './row.jsx';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    }
});

class TodoList extends React.Component {
    render() {
        const {classes, todos} = this.props;

        return (
            <div className={classes.root}>
                <List>
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
    onEditItem: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
    onToggleItem: PropTypes.func.isRequired
};

export default withStyles(styles)(TodoList);
