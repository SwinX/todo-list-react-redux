import React from 'react';
import TodoListHeader from '../../../../src/components/todo-list/header.jsx';

import IconButton from '@material-ui/core/IconButton';

const {shallow} = enzyme;

describe('TodoListRow', () => {
    it('should trigger onAddItem handler when requested to add item', () => {
        const onAddItem = sinon.stub();

        const row = shallow(
            <TodoListHeader onAddItem={onAddItem}/>
        );
        row.find(IconButton).simulate('click');

        expect(onAddItem).to.be.calledOnce;
    });
});
