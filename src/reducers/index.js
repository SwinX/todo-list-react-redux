import {combineReducers} from 'redux';
import sorting from './sorting';
import todos from './todos';

export default combineReducers({
    sorting,
    todos
});
