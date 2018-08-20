import {addTodo, editTodo, removeTodo, toggleTodo} from '../../../src/actions/todo';
import ActionType from '../../../src/actions/types';

describe('Todo action creators', () => {
    const sandbox = sinon.createSandbox();

    afterEach(() => {
        sandbox.restore();
    });

    describe('addTodo', () => {
        it('should create action with `ADD_TODO` type', () => {
            expect(addTodo().type).to.equal(ActionType.ADD_TODO);
        });

        it('should create action with id as current datetime in ms', () => {
            sandbox.stub(Date, 'now')
                .returns(123);

            expect(addTodo().id).to.equal('123');
        });

        it('should create action with passed todo text', () => {
            expect(addTodo('todo_text').text).to.equal('todo_text');
        });
    });

    describe('editTodo', () => {
        it('should create action with `EDIT_TODO` type', () => {
            expect(editTodo().type).to.equal(ActionType.EDIT_TODO);
        });

        it('should create action with passed todo id', () => {
            expect(editTodo('123').id).to.equal('123');
        });

        it('should create action with passed todo text', () => {
            expect(editTodo('id', 'todo_text').text).to.equal('todo_text');
        });
    });

    describe('toggleTodo', () => {
        it('should create action with `TOGGLE_TODO` type', () => {
            expect(toggleTodo().type).to.equal(ActionType.TOGGLE_TODO);
        });

        it('should create action with passed todo id', () => {
            expect(toggleTodo('123').id).to.equal('123');
        });
    });

    describe('removeTodo', () => {
        it('should create action with `REMOVE_TODO` type', () => {
            expect(removeTodo().type).to.equal(ActionType.REMOVE_TODO);
        });

        it('should create action with passed todo id', () => {
            expect(removeTodo('123').id).to.equal('123');
        });
    });
});
