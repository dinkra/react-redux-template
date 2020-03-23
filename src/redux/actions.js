import * as types from './actionTypes';
import api from '../api';

// fetch list
const requestList = () => {
  return {
    type: types.REQUEST_LIST,
  };
};

const receiveList = (items) => {
  return {
    type: types.RECEIVE_LIST,
    payload: {
      items,
    },
  };
};

const receiveListFailed = (error) => {
  return {
    type: types.RECEIVE_LIST_ERROR,
    payload: {
      error,
    },
  };
};

// update list
const requestUpdateList = () => {
  return {
    type: types.REQUEST_ADD_ITEM,
  };
};

export const receiveUpdateList = (item) => {
  return {
    type: types.RECEIVE_ADD_ITEM,
    payload: {
      item,
    },
  };
};

const receiveUpdateListFailed = (error) => {
  return {
    type: types.RECEIVE_ADD_ITEM_ERROR,
    payload: {
      error,
    },
  };
};

// fetch initial page
const requestInitialPage = () => {
  return {
    type: types.REQUEST_INITIAL_PAGE,
  };
};

const receiveInitialPage = (items) => {
  return {
    type: types.RECEIVE_INITIAL_PAGE,
    payload: {
      items,
    },
  };
};

const receiveInitialPageFailed = (error) => {
  return {
    type: types.RECEIVE_INITIAL_PAGE_ERROR,
    payload: {
      error,
    },
  };
};

// fetch next page
const requestNextPage = () => {
  return {
    type: types.REQUEST_NEXT_PAGE,
  };
};

const receiveNextPage = (items) => {
  return {
    type: types.RECEIVE_NEXT_PAGE,
    payload: {
      items,
    },
  };
};

const receiveNextPageFailed = (error) => {
  return {
    type: types.RECEIVE_NEXT_PAGE_ERROR,
    payload: {
      error,
    },
  };
};

// api calls
export const fetchList = () => {
  return (dispatch) => {
    dispatch(requestList());
    return api
      .getList()
      .then((data) => data)
      .then((items) => dispatch(receiveList(items)))
      .catch((error) => dispatch(receiveListFailed(error)));
  };
};

export const updateList = () => {
  return (dispatch) => {
    dispatch(requestList());
    return api
      .postItem()
      .then((data) => data)
      .then((items) => dispatch(receiveList(items)))
      .catch((error) => dispatch(receiveListFailed(error)));
  };
};

export const fetchInitialPage = () => {
  return (dispatch, getState) => {
    const state = getState();
    const limit = state.pagination.pageSize;
    const page = 1;
    dispatch(requestInitialPage());
    return api
      .getList({ page, limit })
      .then((data) => data)
      .then((items) => dispatch(receiveInitialPage(items)))
      .catch((error) => dispatch(receiveInitialPageFailed(error)));
  };
};

export const fetchNextPage = () => {
  return (dispatch, getState) => {
    const state = getState();
    if (state.pagination.reachedEnd) return;
    const limit = state.pagination.pageSize;
    const page = state?.pagination?.items?.length / limit + 1;
    dispatch(requestNextPage());
    return api
      .getList({ page, limit })
      .then((data) => data)
      .then((items) => dispatch(receiveNextPage(items)))
      .catch((error) => dispatch(receiveNextPageFailed(error)));
  };
};
