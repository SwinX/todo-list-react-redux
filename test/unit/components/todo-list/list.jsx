import React from 'react';
import TodoList from '../../../../src/components/todo-list/list.jsx';
import TodoListRow from '../../../../src/components/todo-list/row.jsx';
import TodoListHeader from '../../../../src/components/todo-list/header.jsx';

const {mount} = enzyme;

describe('TodoList', () => {
    it('should render passed todos', () => {
        const todo = {id: '1'};
        const anotherTodo = {id: '2'};

        const list = mount(
            <TodoList
                todos={[todo, anotherTodo]}
                onAddItem={() => {}}
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
                onAddItem={() => {}}
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
                onAddItem={() => {}}
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
                onAddItem={() => {}}
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
                onAddItem={() => {}}
            />
        );
        list.first(TodoListRow).prop('onRemoveItem')({id: 'foo'});

        expect(onRemoveItem).to.be.calledWith({id: 'foo'});
    });

    it('should trigger add item handler when requested to add new item', () => {
        const onAddItem = sinon.stub();

        const list = mount(
            <TodoList
                todos={[{id: 'foo'}]}
                onToggleItem={() => {}}
                onEditItem={() => {}}
                onRemoveItem={() => {}}
                onAddItem={onAddItem}
            />
        );
        list.find(TodoListHeader).prop('onAddItem')();

        expect(onAddItem).to.be.calledOnce;
    });
});