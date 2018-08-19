import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import RemoveIcon from '@material-ui/icons/Remove';

class TodoListRow extends React.Component {
    render() {
        const {todo, onEditItem, onRemoveItem, onToggleItem} = this.props;

        return (
            <ListItem
                role={undefined}
                dense
                button
                onClick={() => onToggleItem(todo)}
            >
                <Checkbox
                    checked={todo.completed}
                    tabIndex={-1}
                    disableRipple
                />
                <ListItemText primary={todo.text} />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Edit" onClick={() => onEditItem(todo)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="Remove" onClick={() => onRemoveItem(todo)}>
                        <RemoveIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

TodoListRow.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        completed: PropTypes.boolean
    }).isRequired,
    onEditItem: PropTypes.func.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
    onToggleItem: PropTypes.func.isRequired
};

export default TodoListRow;
