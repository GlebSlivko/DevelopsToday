import axios from "axios";

const allPostsToStore = () => (dispatch: Function) => {
  axios
    .get("https://simple-blog-api.crew.red/posts")
    .then(response => {
      return response;
    })
    .then(result => {
      if (result.status === 200) {
        let post = result.data.filter( (post : any) => (!post.data  || post.data.title !== "In quibusdam tempore odit est dolorem"));
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
