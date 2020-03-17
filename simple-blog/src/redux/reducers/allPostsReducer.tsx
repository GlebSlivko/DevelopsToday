export const initialState = {
  allPosts: [],
};

export default function allPostReducer(state = initialState, action: any) {
  switch (action.type) {
    case "ALL_POSTS_TO_STORE_SUCCESS": {
      return {
        ...state,
        allPosts: action.payload,
      };
    }
    case "ALL_POSTS_TO_STORE_FAIL": {
      return { ...state };
    }
    default: {
      return state;
    }
  }
}
