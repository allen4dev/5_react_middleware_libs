import * as actionTypes from './actionTypes';

const apiMiddleware = ({ getState, dispatch }) => next => async action => {
  if (action.type !== actionTypes.API) return next(action);

  const { success, filter } = action.payload;
  const { apiEndpoint, normalize } = action.meta;

  dispatch({ type: actionTypes.REQUEST_RESOURCE, payload: { filter } });

  let response = await apiEndpoint();

  if (normalize) {
    response = normalize(response);
  }

  dispatch(success(response));
};

export default apiMiddleware;
