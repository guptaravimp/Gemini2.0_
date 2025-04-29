import axios from "axios";

export const axiosInstance = axios.create({});

const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,  // Corrected 'content' to 'data'
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};

export default apiConnector;  // This will make apiConnector a default export
