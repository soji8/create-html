import axios from 'axios'
import { baseURL } from './common'
axios.defaults.headers = {
  'Content-Type': 'application/json'
}

const service = axios.create({
  baseURL: baseURL,
  timeout: 3000
});

// 请求拦截
service.interceptors.request.use(config => {
  return config;
}, err => {
  return new Promise.resolve(err);
});

service.interceptors.response.use(response => {
  const data = response.data;
  if (data.code === 0) {
    return data.data;
  }
  // 根据返回的code值来做不同的处理(和后端约定)
  return data;
}, (err) => {
  // 返回状态码不为200时候的错误处理
  return console.error(err)
});

export const getRequest = (url, date = {}) => {
  return service({
    method: 'get',
    url: url,
    params: date
  })
}
export const postRequest = (url, date) => {
  return service({
    method: 'post',
    url: url,
    data: date
  })
};

export const fromRequest = (url, date) => {
  let fd = new FormData();
  for(let item in date) {
    fd.append(item, date[item])
  }
  return service({
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    method: 'post',
    url: url,
    data: fd
  })
}