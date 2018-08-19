import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

class TodoListHeader extends React.Component {
    render() {
        const {onAddItem} = this.props;

        return (
            <ListItem
                role={undefined}
                dense
                button
            >
                <ListItemText primary={'Todo list'} />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Edit" onClick={onAddItem}>
                        <AddIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

TodoListHeader.propTypes = {
    onAddItem: PropTypes.func.isRequired
};

export default TodoListHeader;
