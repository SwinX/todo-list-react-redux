import modalReducer from '../../../src/reducers/modal';
import ActionTypes from '../../../src/actions/types';
import {ModalTypes} from '../../../src/constants';

describe('modal reducer', () => {
    describe('`SHOW_MODAL` action', () => {
        it('should set type of modal as passed in action', () => {
            const action = {
                type: ActionTypes.SHOW_MODAL,
                modalType: ModalTypes.TODO_FORM
            };

            expect(modalReducer(undefined, action).type).to.equal(ModalTypes.TODO_FORM);
        });

        it('should set modal props as passed in action', () => {
            const action = {
                type: ActionTypes.SHOW_MODAL,
                modalType: ModalTypes.TODO_FORM,
                modalProps: {foo: 'bar'}
            };

            expect(modalReducer(undefined, action).props).to.eql({foo: 'bar'});
        });
    });

    describe('`HIDE_MODAL action`', () => {
        it('should nullify type of the modal', () => {
            const action = {type: ActionTypes.HIDE_MODAL};

            expect(modalReducer(undefined, action).type).to.be.null;
        });

        it('should set modal props as empty object', () => {
            const action = {type: ActionTypes.HIDE_MODAL};

            expect(modalReducer(undefined, action).props).to.eql({});
        });
    });

    describe('misc actions', () => {
        it('should return passed state', () => {
            const action = {type: ActionTypes.ADD_TODO};
            const prevState = {
                type: ModalTypes.TODO_FORM,
                props: {foo: 'bar'}
            };

            expect(modalReducer(prevState, action)).to.eql({
                type: ModalTypes.TODO_FORM,
                props: {foo: 'bar'}
            });
        });

        it('should use empty modal state as initial state', () => {
            const action: ActionTypes = {type: ActionTypes.ADD_TODO};

            expect(modalReducer(undefined, action)).to.eql({
                type: null,
                props: {}
            });
        });
    });
});
