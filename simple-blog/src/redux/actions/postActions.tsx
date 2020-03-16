import axios from 'axios';

const formDataToStore = (data : any) => (dispatch : any) => {
    console.log("dataInAction",data);
                dispatch(formDataToStoreSuccess(data));
    axios.post("https://simple-blog-api.crew.red/posts", {
        data: {
            "title": data.header,
            "body": data.body
        }
    })
        .then(response => {
            return response;
        })
        .then(result => {
            if(result.status === 200){
                let post = result.data;
                dispatch(formDataToStoreSuccess(post));
            }
            else{
                dispatch(formDataToStoreFail());
            }
        });
};

const formDataToStoreSuccess = (post : any) => {
    return {
        type: 'FORM_DATA_TO_STORE_SUCCESS',
        payload: {
            post
        }
    }
};
const formDataToStoreFail = () => {
    return {
        type: 'FORM_DATA_TO_STORE_FAIL',
    }
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
}