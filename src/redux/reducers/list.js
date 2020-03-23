import {
  REQUEST_LIST,
  RECEIVE_LIST,
  RECEIVE_LIST_ERROR,
  REQUEST_ADD_ITEM,
  RECEIVE_ADD_ITEM,
  RECEIVE_ADD_ITEM_ERROR,
} from '../actionTypes';
import { IDLE, FETCHING, RECEIVED, FAILED } from '../../constants/fetchStatusTypes';

const initialState = {
  fetchStatus: IDLE,
  fetchError: null,
  items: [],
  fetchAddItemStatus: IDLE,
  fetchAddItemError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // list
    case REQUEST_LIST: {
      return {
        ...state,
        fetchStatus: FETCHING,
        fetchError: null,
      };
    }
    case RECEIVE_LIST: {
      const { items } = action.payload;
      return {
        ...state,
        fetchStatus: RECEIVED,
        fetchError: null,
        items,
      };
    }
    case RECEIVE_LIST_ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        fetchStatus: FAILED,
        fetchError: error,
      };
    }
    // add item
    case REQUEST_ADD_ITEM: {
      return {
        ...state,
        fetchAddItemStatus: FETCHING,
        fetchAddItemError: null,
      };
    }
    case RECEIVE_ADD_ITEM: {
      const { item } = action.payload;
      return {
        ...state,
        fetchAddItemStatus: RECEIVED,
        fetchAddItemError: null,
        items: [...state.items, item],
      };
    }
    case RECEIVE_ADD_ITEM_ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        fetchAddItemStatus: FAILED,
        fetchAddItemError: error,
      };
    }
    // default
    default:
      return state;
  }
};
