import {
    mapStateToProps, mapDispatchToProps
} from '../../../../src/components/todo-list/list-container';

import {TodoFormAction, ModalType} from '../../../../src/constants';
import ActionType from '../../../../src/actions/types';

import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

describe('TodoListContainer', () => {
    const sandbox = sinon.createSandbox();

    afterEach(() => {
        sandbox.restore();
    });

    describe('mapStateToProps', () => {
        it('should pick todos from state', () => {
            const state = {todos: ['foo', 'bar']};

            const mapped = mapStateToProps(state);

            expect(mapped).to.eql({todos: ['foo', 'bar']});
        });
    });

    describe('mapDispatchToProps', () => {
        describe('onAddItem', () => {
            it('should open todo form with CREATE form action', () => {
                const store = mockStore();
                const onAddItem = mapDispatchToProps(store.dispatch).onAddItem;

                onAddItem();

                expect(store.getActions()).to.deep.include({
                    type: ActionType.SHOW_MODAL,
                    modalType: ModalType.TODO_FORM,
                    modalProps: {action: TodoFormAction.CREATE}
                });
            });
        });

        describe('onEditItem', () => {
            it('should open todo form with EDIT form action for specific todo', () => {
                const store = mockStore();
                const onEditItem = mapDispatchToProps(store.dispatch).onEditItem;

                onEditItem({id: '123'});

                expect(store.getActions()).to.deep.include({
                    type: ActionType.SHOW_MODAL,
                    modalType: ModalType.TODO_FORM,
                    modalProps: {action: TodoFormAction.EDIT, todo: {id: '123'}}
                });
            });
        });

        describe('onToggleItem', () => {
            it('should toggle todo', () => {
                const store = mockStore();
                const onToggleItem = mapDispatchToProps(store.dispatch).onToggleItem;

                onToggleItem({id: '123'});

                expect(store.getActions()).to.deep.include({
                    type: ActionType.TOGGLE_TODO,
                    id: '123'
                });
            });
        });

        describe('onRemoveItem', () => {
            it('should remove todo', () => {
                const store = mockStore();
                const onRemoveItem = mapDispatchToProps(store.dispatch).onRemoveItem;

                onRemoveItem({id: '123'});

                expect(store.getActions()).to.deep.include({
                    type: ActionType.REMOVE_TODO,
                    id: '123'
                });
            });
        });
    });
});
