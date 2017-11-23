// TODO
const apiMiddleware = ({ getState, dispatch }) => next => async action => {
  if (action.type !== 'API') return next(action);

  const { success, filter } = action.payload;
  const { apiEndpoint } = action.meta;

  dispatch({ type: 'REQUEST_RESOURCE', payload: { filter } });

  const data = await apiEndpoint();

  dispatch(success(data));
};

export default apiMiddleware;
