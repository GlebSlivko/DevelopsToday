import axios from "axios";

const formDataToStore = (data: any) => (dispatch: any) => {
  console.log("dataInAction", data);
  dispatch(formDataToStoreSuccess(data));
  let date: any = new Date();
  let postDate = Date.parse(date);
  console.log("postDate", postDate);
  axios
    .post("https://simple-blog-api.crew.red/posts", {
      data: {
        title: data.header,
        body: data.body,
      },
    })
    .then(response => {
      data.date = postDate;
      console.log("data", data);
      return response;
    })
    .then(result => {
      if (result.status === 200) {
        let post = result.data;
        dispatch(formDataToStoreSuccess(post));
      } else {
        dispatch(formDataToStoreFail());
      }
    });
};

const formDataToStoreSuccess = (post: any) => {
  return {
    type: "FORM_DATA_TO_STORE_SUCCESS",
    payload: {
      post,
    },
  };
};
const formDataToStoreFail = () => {
  return {
    type: "FORM_DATA_TO_STORE_FAIL",
  };
};

// const changeActiveLang = (lang : any)=>{
//     return {
//         type: 'CHANGE_ACTIVE_LANG',
//         payload: lang
//     }
// }

export {
  formDataToStore,
  formDataToStoreSuccess,
  formDataToStoreFail,
  // changeActiveLang
};
