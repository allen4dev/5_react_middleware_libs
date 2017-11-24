import * as actionTypes from './actionTypes';

const apiMiddleware = ({ getState, dispatch }) => next => async action => {
  console.log(action);
  if (action.type !== actionTypes.API) return next(action);

  const { success, filter } = action.payload;
  const { apiEndpoint } = action.meta;

  dispatch({ type: actionTypes.REQUEST_RESOURCE, payload: { filter } });

  const data = await apiEndpoint();

  dispatch(success(data));
};

export default apiMiddleware;
