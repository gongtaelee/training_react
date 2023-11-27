import axios from "axios";
import { API_HOST } from "../common/constant"
import { message } from "antd"; // 앤트 디자인 메세지

/**
 *
 * @param {object} param
 * @param {'get' | 'post' =} param.method // get 이나 post 만 가능하다는 뜻 '=' 기호는 optional 뜻임, 값을 입력하지 않아도 된다는 것
 * @param {string} param.url
 * @param {object=} param.params // optional
 * @param {object=} param.data // optional
 * @param {object=} param.totalCount // optional
 */
export function callApi({ method = "get", url, params, data }) {
  return axios({
    url,
    method,
    baseURL: API_HOST,
    params,
    data,
    withCredentials: true, // 사용자 인증을위해 토큰을 쿠키로 저장해서 이용하기 위한 옵션
  })
    .then((response) => {
      const { resultCode, resultMessage, totalCount } = response.data;
      if (resultCode < 0) {
        message.error(resultMessage);
      }
      return {
        isSuccess: resultCode === ResultCode.Success,
        data: response.data.data,
        resultCode,
        resultMessage,
        totalCount,
      };
    })
    .catch(() => {
      return {
        isSuccess: false,
      };
    });
}

export const ResultCode = {
  Success: 0,
};
