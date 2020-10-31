import { getUsers } from '../../routines';
import { RESET_USERS } from './actionTypes'

const initialState = {
  users: [],
  loading: false,
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
  [RESET_USERS]: (state) => ({ ...state, users: [] }),
  DEFAULT: (state) => state
}

export const usersReducer = (state = initialState, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
