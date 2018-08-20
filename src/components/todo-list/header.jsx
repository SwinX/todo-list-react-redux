import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

import {SortingType} from '../../constants';

class TodoListHeader extends React.Component {
    render() {
        const {onAddItem, onToggleSorting} = this.props;

        return (
            <ListItem
                role={undefined}
                dense
                button
                onClick={onToggleSorting}
            >
                <ListItemText primary={this._buildTitle()} />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Edit" onClick={onAddItem}>
                        <AddIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }

    _buildTitle() {
        const {sorting} = this.props;

        switch (sorting) {
            case SortingType.ASCENDING: {
                return 'Todo list ↑';
            }

            case SortingType.DESCENDING: {
                return 'Todo list ↓';
            }
        }
    }
}

TodoListHeader.propTypes = {
    sorting: PropTypes.string.isRequired,
    onAddItem: PropTypes.func,
    onToggleSorting: PropTypes.func
};

export default TodoListHeader;
