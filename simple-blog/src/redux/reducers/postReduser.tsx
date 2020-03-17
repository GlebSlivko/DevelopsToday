export const initialState = {
    header: {},
    body: {}
};

export default function postReducer (state = initialState, action : any) {
    switch (action.type) {
        case 'FORM_DATA_TO_STORE_SUCCESS': {
          return { ...state, header: action.payload.post.header, body: action.payload.post.body };
        }
        case 'FETCH_POST_FAIL': {
          return { ...state };
        }

        default: {
          return state
        }
  }
}
