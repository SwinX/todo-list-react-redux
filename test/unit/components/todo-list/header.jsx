import React from 'react';
import TodoListHeader from '../../../../src/components/todo-list/header.jsx';

import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';

import {SortingType} from '../../../../src/constants';

const {shallow} = enzyme;

describe('TodoListHeader', () => {
    it('should render up arrow in title if sorting is ascending', () => {
        const header = shallow(
            <TodoListHeader sorting={SortingType.ASCENDING}/>
        );

        const title = header.find(ListItemText).prop('primary');

        expect(title).to.be.equal('Todo list ↑');
    });

    it('should render down arrow in title if sorting is descending', () => {
        const header = shallow(
            <TodoListHeader sorting={SortingType.DESCENDING}/>
        );

        const title = header.find(ListItemText).prop('primary');

        expect(title).to.be.equal('Todo list ↓');
    });

    it('should trigger onAddItem handler when requested to add item', () => {
        const onAddItem = sinon.stub();

        const header = shallow(
            <TodoListHeader sorting={SortingType.ASCENDING} onAddItem={onAddItem}/>
        );
        header.find(IconButton).simulate('click');

        expect(onAddItem).to.be.calledOnce;
    });

    it('should trigger onToggleSorting handler when requested to toggle sorting', () => {
        const onToggleSorting = sinon.stub();

        const header = shallow(
            <TodoListHeader sorting={SortingType.ASCENDING} onToggleSorting={onToggleSorting}/>
        );
        header.simulate('click');

        expect(onToggleSorting).to.be.calledOnce;
    });
});
