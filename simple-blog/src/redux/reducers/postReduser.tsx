export const initialState = {
    header: {},
    body: {}
};
console.log("initialState",initialState);

export default function postReducer (state = initialState, action : any) {
    switch (action.type) {
        case 'FORM_DATA_TO_STORE_SUCCESS': {
          return { ...state, header: action.payload.post.header, body: action.payload.post.body };
        }
        // case 'CHANGE_ACTIVE_LANG': {
        //   return { ...state, langActive: action.payload };
        // }
        case 'FETCH_POST_FAIL': {
          return { ...state };
        }

        default: {
          return state
        }
  }
}
