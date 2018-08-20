import * as React from 'react';
import {connect} from 'react-redux';

import TodoForm from './todo-form';

import {hideModal} from '../../actions';

import {ModalType} from '../../constants';

const modalForType = {
    [ModalType.TODO_FORM]: TodoForm
};

export class ModalRoot extends React.Component {
    render() {
        const {type, props, onClose} = this.props;
        const ModalComponent = modalForType[type];

        return (
            <div>
                {ModalComponent ? (<ModalComponent onClose={onClose} {...props}/>) : null}
            </div>
        );
    }
}

export const mapStateToProps = state => state.modal;
export const mapDispatchToProps = dispatch => ({
    onClose: () => dispatch(hideModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalRoot);
