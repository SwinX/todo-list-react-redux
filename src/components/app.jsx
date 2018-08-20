import React from 'react';
import TodoList from './todo-list/index.jsx';
import {ModalRoot} from './modal';

const todos = [
    {
        id: '1',
        text: 'Do stuff',
        completed: false
    },
    {
        id: '2',
        text: 'Do another stuff',
        completed: true
    }
];

const App = () => (
    <div>
        <TodoList
            todos={todos}
            onEditItem={item => console.log(`on edit item ${item.id}`)}
            onRemoveItem={item => console.log(`on remove item ${item.id}`)}
            onToggleItem={item => console.log(`on toggle item ${item.id}`)}
        />
        <ModalRoot />
    </div>
);

export default App;
