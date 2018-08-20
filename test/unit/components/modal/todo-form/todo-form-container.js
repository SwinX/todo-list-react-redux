import {
    mapDispatchToProps, mergeProps
} from '../../../../../src/components/modal/todo-form/todo-form-container';

import {TodoFormAction} from '../../../../../src/constants';
import ActionType from '../../../../../src/actions/types';

import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

describe('TodoFormContainer', () => {
    const sandbox = sinon.createSandbox();

    afterEach(() => {
        sandbox.restore();
    });

    describe('mapDispatchToProps', () => {
        describe('onSave', () => {
            it('should add new todo if requested action was CREATE', () => {
                const store = mockStore();
                const onSave = mapDispatchToProps(
                    store.dispatch,
                    {action: TodoFormAction.CREATE}
                ).onSave;
                sandbox.stub(Date, 'now').returns(123);

                onSave('todo_text');

                expect(store.getActions()).to.deep.include({
                    type: ActionType.ADD_TODO,
                    id: '123',
                    text: 'todo_text'
                });
            });

            it('should edit existing todo if action was EDIT', () => {
                const store = mockStore();
                const onSave = mapDispatchToProps(
                    store.dispatch,
                    {
                        action: TodoFormAction.EDIT,
                        todo: {id: '123'}
                    }
                ).onSave;

                onSave('todo_text');

                expect(store.getActions()).to.deep.include({
                    type: ActionType.EDIT_TODO,
                    id: '123',
                    text: 'todo_text'
                });
            });
        });
    });

    describe('mergeProps', () => {
        it('should pass onClose prop from own props', () => {
            const onClose = sandbox.stub();

            const result = mergeProps(undefined, {}, {onClose});

            expect(result.onClose).to.be.equal(onClose);
        });

        it('should pass todo text from parent props if it is available', () => {
            const todo = {text: 'todo_text'};

            const result = mergeProps(undefined, {}, {todo});

            expect(result.text).to.be.equal('todo_text');
        });

        it('should not throw if todo is not available', () => {
            expect(() => mergeProps(undefined, {}, {})).to.not.throw;
        });

        it('should pass onSave handler from dispatch props', () => {
            const onSave = sandbox.stub();

            const result = mergeProps(undefined, {onSave}, {});

            expect(result.onSave).to.be.equal(onSave);
        });
    });
});
