import ActionTypes from '../actions/types';

const initialState = {
    type: null,
    props: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SHOW_MODAL: {
            return {
                type: action.modalType,
                props: action.modalProps
            };
        }

        case ActionTypes.HIDE_MODAL: {
            return initialState;
        }

        default: {
            return state;
        }
    }
};
