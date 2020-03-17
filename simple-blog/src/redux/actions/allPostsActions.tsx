import axios from "axios";

const allPostsToStore = () => (dispatch: any) => {
  axios
    .get("https://simple-blog-api.crew.red/posts")
    .then(response => {
      console.log("responseInAllPostsAction", response);
      return response;
    })
    .then(result => {
      if (result.status === 200) {
        let post = result.data;
        console.log("post", post);
        dispatch(allPostsToStoreSuccess(post));
      } else {
        dispatch(allPostsToStoreFail());
      }
    });
};

const allPostsToStoreSuccess = (post: any) => {
  return {
    type: "ALL_POSTS_TO_STORE_SUCCESS",
    payload: post,
  };
};

const allPostsToStoreFail = () => {
  return {
    type: "ALL_POSTS_TO_STORE_FAIL",
  };
};

export { allPostsToStore, allPostsToStoreSuccess, allPostsToStoreFail };
