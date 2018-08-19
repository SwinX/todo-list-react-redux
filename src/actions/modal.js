import ActionTypes from './types';

const showModal = (modalType, modalProps = {}) => ({
    type: ActionTypes.SHOW_MODAL,
    modalType,
    modalProps
});

const hideModal = () => ({
    type: ActionTypes.HIDE_MODAL
});

export {
    showModal,
    hideModal
};
