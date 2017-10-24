import { ADD_ITEM, DELETE_ITEM, MARK_ITEM, FILTER_COMPLETED } from './constants';

export const initialState = {
    items: [
      { id: 1, content: 'Call mum', marked: false },
      { id: 2, content: 'Buy cat food', marked: false },
      { id: 3, content: 'Water the plants', marked: false },
    ],
    filterCompleted: false
};

const reducer = (state = initialState, action) => {

  let newState;

  switch (action.type) {

    case ADD_ITEM:
      const nextId = state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
          id: nextId,
          content: action.content,
          marked: false
      };

      newState = {
        ...state,
        items: [...state.items, newItem],
      };
      break;

      case DELETE_ITEM:
        const newItems = state.items.filter(item => {
          return item.id !== action.id;
        });

        newState = {
            ...state,
            items: newItems
        };

      break;

      case MARK_ITEM:
          const newList = state.items.slice();
          newList.forEach(item => {
              item.marked = (action.id === item.id) ? !item.marked : item.marked;
          });
          newState = {
              ...state,
              items: newList
          };
          break;

      case FILTER_COMPLETED:
          newState = {
              ...state,
              filterCompleted: action.content
          };
        break;

    default:
      newState = state;
      break;
  }

  return newState;
};

export default reducer;
