import { createSelector } from 'reselect';

// list
export const getListState = createSelector(
  (state) => state.list,
  (list) => list
);

export const getList = createSelector(getListState, (list) => list.items);
export const getListStatus = createSelector(getListState, (list) => list.fetchStatus);
export const getListError = createSelector(getListState, (list) => list.fetchError);
