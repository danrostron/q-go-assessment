import {ADD_ITEM, DELETE_ITEM, FILTER_COMPLETED, MARK_ITEM} from './constants';

export const addItem = content => {
  return { type: ADD_ITEM, content };
};

export const deleteItem = id => {
    return { type: DELETE_ITEM, id };
};

export const markItem = id =>{
    return { type: MARK_ITEM, id}
};

export const filterCompleted = content =>{
    return { type: FILTER_COMPLETED, content}
};