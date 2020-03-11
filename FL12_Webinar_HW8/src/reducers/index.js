
import changeList from './changeList';


import { combineReducers } from 'redux';

const allReducers = combineReducers({
    listCourses: changeList,
})
export default allReducers;



