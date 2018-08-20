import todosReducer from '../../../src/reducers/todos';
import ActionTypes from '../../../src/actions/types';

describe('todos reducer', () => {
    describe('ADD_TODO', () => {
        it('should add todo to the todos list', () => {
            const action = {type: ActionTypes.ADD_TODO};

            const reduced = todosReducer([{foo: 'bar'}], action);

            expect(reduced).to.have.length(2);
        });

        it('should add new incompleted todo with information from action', () => {
            const action = {
                type: ActionTypes.ADD_TODO,
                id: '123',
                text: 'foobar'
            };

            const reduced = todosReducer([], action);

            expect(reduced[0]).to.be.eql({
                id: '123',
                text: 'foobar',
                completed: false
            });
        });
    });

    describe('EDIT_TODO', () => {
        it('should edit text of todo passed in action', () => {
            const action = {
                type: ActionTypes.EDIT_TODO,
                id: '123',
                text: 'bar'
            };

            const reduced = todosReducer([{id: '123', text: 'foo'}], action);

            expect(reduced[0].text).to.be.equal('bar');
        });

        it('should not modify todos not matching todo passed in action', () => {
            const action = {
                type: ActionTypes.editTodo,
                id: '123',
                text: 'bar'
            };

            const reduced = todosReducer([{id: '456', text: 'foo'}], action);

            expect(reduced[0].text).to.be.equal('foo');
        });
    });

    describe('TOGGLE_TODO', () => {
        it('should toggle completed status of todo passed in action', () => {
            const action = {
                type: ActionTypes.TOGGLE_TODO,
                id: '123'
            };

            const reduced = todosReducer([{id: '123', completed: false}], action);

            expect(reduced[0].completed).to.be.true;
        });

        it('should not modify todos not matching todo passed in action', () => {
            const action = {
                type: ActionTypes.TOGGLE_TODO,
                id: '123'
            };

            const reduced = todosReducer([{id: '456', completed: false}], action);

            expect(reduced[0].completed).to.be.false;
        });
    });

    describe('REMOVE_TODO', () => {
        it('should remove todo passed in action', () => {
            const action = {
                type: ActionTypes.REMOVE_TODO,
                id: '123'
            };

            const reduced = todosReducer([{id: '123'}], action);

            expect(reduced).to.have.length(0);
        });

        it('should preserve todos not passed in action', () => {
            const action = {
                type: ActionTypes.REMOVE_TODO,
                id: '123'
            };

            const reduced = todosReducer([{id: '456'}], action);

            expect(reduced).to.have.length(1);
        });
    });

    describe('misc actions', () => {
        it('should return previous todos list', () => {
            const action = {type: ActionTypes.SET_TODO_SORTING};

            const reduced = todosReducer([{foo: 'bar'}], action);

            expect(reduced).to.eql([{foo: 'bar'}]);
        });

        it('should return empty todos list by default', () => {
            const action = {type: ActionTypes.SET_TODO_SORTING};

            const reduced = todosReducer(undefined, action);

            expect(reduced).to.eql([]);
        });
    });
});
