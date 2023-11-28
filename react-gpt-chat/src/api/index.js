import axios from 'axios';
import { API_HOST_PORT } from '../common/constant';

const BASE_URL = `${window.location.protocol}//${window.location.hostname}${API_HOST_PORT}`/* + "/api/v1"*/;
// export {BASE_URL};
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

async function apiReq(
    endPoint,
    data,
    method,
    headers,
    token,
    requestOptions = {}
) {
    return new Promise(async (resolve, reject) => {
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

        axios.defaults.baseURL = BASE_URL;
        axios[method](endPoint, data, { headers })
            .then(result => {
                const res_json = JSON.parse(result);
                if (res_json.status === 'fail') {
                    return reject(res_json);
                }
                return resolve(res_json.response);
            })
            .catch(error => {
                return reject(error);
            });
    });
}