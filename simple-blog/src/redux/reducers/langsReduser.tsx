export const initialState = {
    header: {},
    body: {}
};
console.log("initialState",initialState);

export default function langsReducer (state = initialState, action : any) {
    switch (action.type) {
        case 'FORM_DATA_TO_STORE_SUCCESS': {
          return { ...state, header: action.payload.langs, body: action.payload.langs[Object.keys(action.payload.langs)[0]] };
        }
        // case 'CHANGE_ACTIVE_LANG': {
        //   return { ...state, langActive: action.payload };
        // }
        case 'FETCH_LANGS_FAIL': {
          return { ...state };
        }

        default: {
          return state
        }
  }
}
