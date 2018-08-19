import {showModal, hideModal} from '../../../src/actions/modal';
import {ModalType} from '../../../src/constants';
import ActionType from '../../../src/actions/types';

describe('Modal action creators', () => {
    describe('showModal', () => {
        it('should create action with `SHOW_MODAL` type', () => {
            expect(showModal(ModalType.TODO_FORM).type).to.equal(ActionType.SHOW_MODAL);
        });

        it('should create action with passed modal type', () => {
            expect(showModal(ModalType.TODO_FORM).modalType).to.equal(ModalType.TODO_FORM);
        });

        it('should create action with passed modal props', () => {
            expect(showModal(ModalType.TODO_FORM, {foo: 'bar'}).modalProps).to.eql({foo: 'bar'});
        });

        it('should set modal props as {} if modal props not passed', () => {
            expect(showModal(ModalType.TODO_FORM).modalProps).to.eql({});
        });
    });

    describe('hideModal', () => {
        it('should create action with `HIDE_MODAL` type', () => {
            expect(hideModal().type).to.equal(ActionType.HIDE_MODAL);
        });
    });
});
