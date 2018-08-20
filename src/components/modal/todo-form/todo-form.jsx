import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {withStyles} from '@material-ui/core/styles';

const styles = {
    saveButton: {},
    cancelButton: {}
};

export class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true,
            text: props.text
        };
    }

    render() {
        const {onClose, classes} = this.props;
        const {isOpen, text} = this.state;
        return (
            <Dialog
                open={isOpen}
                onExited={onClose}
                onClose={this._hideDialog}
            >
                <DialogTitle id="form-dialog-title">Todo</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        What do you want to do?
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="text"
                        label="Title"
                        type="text"
                        fullWidth
                        value={text}
                        onChange={this._onTextChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button className={classes.cancelButton} onClick={this._onCancel} color="primary">
                        Cancel
                    </Button>
                    <Button
                        className={classes.saveButton}
                        onClick={this._onSave}
                        color="primary"
                        disabled={!text.length}
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

    _onTextChange = (event) => this.setState({text: event.target.value});

    _hideDialog = () => this.setState({isOpen: false});

    _onCancel = () => {
        this._hideDialog();
        this.props.onCancel();
    }

    _onSave = () => {
        this._hideDialog();
        this.props.onSave(this.state.text);
    }
}

TodoForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    text: PropTypes.string,
    classes: PropTypes.object
};

export default withStyles(styles)(TodoForm);
