import {combineReducers} from 'redux';
import sorting from './sorting';
import todos from './todos';
import modal from './modal';

export default combineReducers({
    sorting,
    todos,
    modal
});
