import React from 'react';
import TodoList from '../../../../src/components/todo-list/index.jsx';
import TodoListRow from '../../../../src/components/todo-list/row.jsx';

const {mount} = enzyme;

describe('TodoList', () => {
    it('should render passed todos', () => {
        const todo = {id: '1'};
        const anotherTodo = {id: '2'};

        const list = mount(
            <TodoList
                todos={[todo, anotherTodo]}
                onToggleItem={() => {}}
                onEditItem={() => {}}
                onRemoveItem={() => {}}
            />
        );

        const rows = list.find(TodoListRow);
        expect(rows).to.have.length(2);
        expect(rows.get(0).props.todo).to.be.eql(todo);
        expect(rows.get(1).props.todo).to.be.eql(anotherTodo);
    });

    it('should use todo id as a row key', () => {
        const onToggleItem = sinon.stub();

        const list = mount(
            <TodoList
                todos={[{id: 'foo'}]}
                onToggleItem={onToggleItem}
                onEditItem={() => {}}
                onRemoveItem={() => {}}
            />
        );
        const rowKey = list.find(TodoListRow).key();

        expect(rowKey).to.be.equal('foo');
    });

    it('should trigger toggle item handler when todo item was toggled', () => {
        const onToggleItem = sinon.stub();

        const list = mount(
            <TodoList
                todos={[{id: 'foo'}]}
                onToggleItem={onToggleItem}
                onEditItem={() => {}}
                onRemoveItem={() => {}}
            />
        );
        list.first(TodoListRow).prop('onToggleItem')({id: 'foo'});

        expect(onToggleItem).to.be.calledWith({id: 'foo'});
    });

    it('should trigger edit item handler when requested to edit todo item', () => {
        const onEditItem = sinon.stub();

        const list = mount(
            <TodoList
                todos={[{id: 'foo'}]}
                onToggleItem={() => {}}
                onEditItem={onEditItem}
                onRemoveItem={() => {}}
            />
        );
        list.first(TodoListRow).prop('onEditItem')({id: 'foo'});

        expect(onEditItem).to.be.calledWith({id: 'foo'});
    });

    it('should trigger remove item handler when requested to remove todo item', () => {
        const onRemoveItem = sinon.stub();

        const list = mount(
            <TodoList
                todos={[{id: 'foo'}]}
                onToggleItem={() => {}}
                onEditItem={() => {}}
                onRemoveItem={onRemoveItem}
            />
        );
        list.first(TodoListRow).prop('onRemoveItem')({id: 'foo'});

        expect(onRemoveItem).to.be.calledWith({id: 'foo'});
    });
});
