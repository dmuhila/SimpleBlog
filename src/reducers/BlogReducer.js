import { FETCH_POSTS, READ_POST } from "../actions/BlogActions";

const INITIAL_STATE = {
  all: [],
  post: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        all: action.payload.data
      };

    case READ_POST:
      return {
        ...state,
        post: action.payload.data
      };

    default:
      return state;
  }
}
