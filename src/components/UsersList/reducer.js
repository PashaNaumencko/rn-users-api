import { getUsers } from '../../routines';

const initialState = {
  users: [],
  loading: true,
  error: null
};

const handlers = {
  [getUsers.TRIGGER]: (state) => ({ ...state, loading: true }),
  [getUsers.SUCCESS]: (state, action) => ({
    ...state,
    users: [...state.users, ...action.payload]
  }),
  [getUsers.FAILURE]: (state, action) => ({ ...state, error: action.payload }),
  [getUsers.FULFILL]: (state) => ({ ...state, loading: false }),
  DEFAULT: (state) => state
}

export const usersReducer = (state = initialState, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
