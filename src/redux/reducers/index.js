import { combineReducers } from 'redux';
import list from './list';
import pagination from './pagination';

export default combineReducers({ list, pagination });
