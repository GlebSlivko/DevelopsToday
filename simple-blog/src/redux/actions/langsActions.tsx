import axios from 'axios';

const formDataToStore = (data : any) => (dispatch : any) => {
    console.log("dataInAction",data);
     let langs = data;
                dispatch(formDataToStoreSuccess(langs));
    // axios.get("/api/langs")
    //     .then(response => {
    //         return response;
    //     })
        // .then(result => {
        //     if(result.status === 200){
        //         let langs = result.data;
        //         dispatch(fetchLangsSuccess(langs));
        //     }
        //     else{
        //         dispatch(formDataToStoreFail());
        //     }
        // });
};

const formDataToStoreSuccess = (langs : any) => {
    return {
        type: 'FORM_DATA_TO_STORE_SUCCESS',
        payload: {
            langs
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