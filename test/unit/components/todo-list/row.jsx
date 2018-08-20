import React from 'react';
import TodoListRow from '../../../../src/components/todo-list/row.jsx';

import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

const {shallow} = enzyme;

describe('TodoListRow', () => {
    it('should render todo text', () => {
        const todo = {text: 'foo'};

        const row = shallow(
            <TodoListRow todo={todo}/>
        );

        expect(row.find(ListItemText).prop('primary'))
            .to.be.equal('foo');
    });

    it('should trigger onToggleItem handler when row was clicked', () => {
        const onToggleItem = sinon.stub();

        const row = shallow(
            <TodoListRow todo={{id: 'foo'}} onToggleItem={onToggleItem}/>
        );
        row.simulate('click');

        expect(onToggleItem).to.be.calledWith({id: 'foo'});
    });

    it('should trigger onEditItem handler when edit button was cliecked', () => {
        const onEditItem = sinon.stub();

        const row = shallow(
            <TodoListRow todo={{id: 'foo'}} onEditItem={onEditItem}/>
        );
        row.find(IconButton).first().simulate('click');

        expect(onEditItem).to.be.calledWith({id: 'foo'});
    });

    it('should trigger onRemoveItem handler when remove button was cliecked', () => {
        const onRemoveItem = sinon.stub();

        const row = shallow(
            <TodoListRow todo={{id: 'foo'}} onRemoveItem={onRemoveItem}/>
        );
        row.find(IconButton).last().simulate('click');

        expect(onRemoveItem).to.be.calledWith({id: 'foo'});
    });
});
