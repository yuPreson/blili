import axios from 'axios';
import {Toast} from 'vant'
import vue from 'vue'

vue.use(Toast)

axios.defaults.baseURL = 'http://112.74.99.5:3000/web/api';

axios.interceptors.request.use(function (config) {
  if(sessionStorage.getItem('token') && sessionStorage.getItem('id')){
    config.headers.Authorization = 'Bearer ' + sessionStorage.getItem('token')
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});
export default function ajax(url, data, meathd = 'get') {
  return new Promise((resolve, reject) => {
    let promise;
    if (meathd == 'get') {
      let dataStr = '';
      if (data) {
        Object.keys(data).forEach(key => {
          dataStr += key + '=' + data[key] + '&'
        })
      }

      if (dataStr != '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr
      }
      promise = axios.get(url)
    } else if (meathd == 'post') {
      promise = axios.post(url, data)
    } else {
      promise = axios[meathd](url.data);
    }

    promise.then(response => {
      if (response.data.code == 200) {
        resolve(response.data)
      } else {
        console.log('ajax',response)
        resolve(response.data)
        // Toast(response.data.msg);
      }
    }).catch(error => {
      reject(error)
    })
  })
}