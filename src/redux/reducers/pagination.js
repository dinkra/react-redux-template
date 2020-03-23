import * as types from '../actionTypes';
import { FETCHING, FETCHING_NEXT, RECEIVED, FAILED, IDLE } from '../../constants/fetchStatusTypes';

const initialState = {
  pageSize: 10,
  fetchStatus: IDLE,
  items: [],
  reachedEnd: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // initial page
    case types.REQUEST_INITIAL_PAGE:
      return {
        ...state,
        fetchStatus: FETCHING,
        reachedEnd: false,
      };
    case types.RECEIVE_INITIAL_PAGE: {
      return {
        ...state,
        items: action.payload.items,
        fetchStatus: RECEIVED,
        reachedEnd: action?.payload?.items?.length < state.pageSize,
      };
    }

    // next page
    case types.REQUEST_NEXT_PAGE:
      return {
        ...state,
        fetchStatus: FETCHING_NEXT,
      };
    case types.RECEIVE_NEXT_PAGE:
      return {
        ...state,
        fetchStatus: RECEIVED,
        items: [...state.items, ...action.payload.items],
        reachedEnd: action?.payload?.items?.length < state.pageSize,
      };

    case types.RECEIVE_INITIAL_PAGE_ERROR:
    case types.RECEIVE_NEXT_PAGE_ERROR:
      return {
        ...state,
        fetchStatus: FAILED,
      };

    default:
      return state;
  }
};
