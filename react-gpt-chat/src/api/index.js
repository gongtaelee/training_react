import axios from 'axios';
import { API_HOST } from '../common/constant';

const BASE_URL = `${window.location.protocol}//${window.location.hostname}${API_HOST}`/* + "/api/v1"*/;
export {BASE_URL};

// export function getUserId() {
//     return sessionStorage.getItem('userId');;
// }

// export function setUserSessionStorage(id, session) {
//     sessionStorage.setItem('userId', id);
//     sessionStorage.setItem('token', session);
// }

export function apiPost(endPoint, data, headers = {}, token) {
    return apiReq(endPoint, data, 'post', headers, token);
}

export function apiDelete(endPoint, data, headers = {}, token) {
    return apiReq(endPoint, data, 'delete', headers, token);
}

export function apiGet(endPoint, data = {}, headers = {}, requestOptions, token) {
    return apiReq(endPoint, data, 'get', headers, requestOptions, token);
}

export function apiPut(endPoint, data, headers = {}, token) {
    return apiReq(endPoint, data, 'put', headers, token);
}

export function setItem(key, data) {
    data = JSON.stringify(data);
    return sessionStorage.setItem(key, data);
}

export function getItem(key) {
    return JSON.parse(sessionStorage.getItem(key));
}

// function getHeaders() {
//     let token = sessionStorage.getItem('token');
//     if (token) {
//         return {
//           Authorization: `${token}`,
//         };
//     }
//     return {};
// }


/**
 *
 * @param {object} param
 * @param {'get' | 'post' =} param.method
 * @param {string} param.url
 * @param {object=} param.params
 * @param {object=} param.data
 * @param {object=} param.totalCount
 */
async function apiReq(    
    endPoint,
    data,
    method,
    headers,
    token,
    requestOptions = {}) {

    const getTokenHeader = token && { Authorization: `${token}` };
    headers = {
        ...getTokenHeader,
        ...headers
    };
    if (method === 'get' || method === 'delete') {
        data = {
            ...requestOptions,
            ...data,
            headers
        };
    }
    console.log(BASE_URL)
    axios.defaults.baseURL = BASE_URL;
    axios[method](endPoint, data, { headers })
    .then(result => {
        const { data } = {"data": result};
        return data;
        // if (data.status === false) {
        //     return data;
        // }
        // return data;
    })
    .catch(() => {
        return {
            isSuccess: false,
        };
    });

    // return axios({
    //   url,
    //   method,
    //   baseURL: API_HOST,
    //   params,
    //   data,
    //   token,
    //   headers,
    //   withCredentials: true,
    // })
    //   .then((response) => {
    //     const { resultCode, resultMessage, totalCount } = response.data;
    //     if (resultCode < 0) {
    //       message.error(resultMessage);
    //     }
    //     return {
    //       isSuccess: resultCode === ResultCode.Success,
    //       data: response.data.data,
    //       resultCode,
    //       resultMessage,
    //       totalCount,
    //     };
    //   })
    //   .catch(() => {
    //     return {
    //       isSuccess: false,
    //     };
    //   });
  }



// async function apiReq(
//     endPoint,
//     data,
//     method,
//     headers,
//     token,
//     requestOptions = {}
// ) {
//     return new Promise(async (res, rej) => {
//         const getTokenHeader = token && { Authorization: `${token}` };
//         headers = {
//             ...getTokenHeader,
//             ...headers
//         };

//         if (method === 'get' || method === 'delete') {
//             data = {
//                 ...requestOptions,
//                 ...data,
//                 headers
//             };
//         }

//         axios.defaults.baseURL = BASE_URL;
//         axios[method](endPoint, data, { headers })
//             .then(result => {
//                 const { data } = {"data": result};
//                 if (data.status === false) {
//                     return rej(data);
//                 }
//                 return res(data);
//             })
//             .catch(error => {
//                 return res(error);
//                 // console.log(error)
//                 // console.log(error && error.response, 'the error respne')
//                 // if (error && error.response && error.response.status === 401) {
//                 //     // clearUserSource();
//                 // }
//                 // if (error && error.response && error.response.data) {
//                 //     if (!error.response.data.message) {
//                 //         return rej({ ...error.response.data, msg: error.response.data.message || "Network Error" })
//                 //     }
//                 //     return rej(error.response.data)
//                 // } else {
//                 //     return rej({ message: "Network Error", msg: "Network Error" });
//                 // }
//             });
//     });
// }