/**
 * User: zhoukc
 * Date: 2019/12/21
 * Time: 20:39
 * Description:
 */
/*
import axios from 'axios'
import qs from 'qs'     // 引入qs模块，用来序列化post类型的数据，后面会提到

// 环境的切换
if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = 'http://localhost:8080';
} else if (process.env.NODE_ENV == 'debug') {
  axios.defaults.baseURL = ''
} else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = 'https://www.baidu.com';
}

// 请求超时
axios.defaults.timeout = 10000

// 请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

/!**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 *!/
/!*export function get(url, params){
  return new Promise((resolve, reject) =>{
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err =>{
      reject(err.data)
    })
  });}*!/

/!**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 *!/
/!*export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err =>{
        reject(err.data)
      })
  });
}*!/
/!**
 * https://juejin.im/post/5b55c118f265da0f6f1aa354
 * get的第二个参数是一个{}，然后这个对象的params属性值是一个参数对象的。而post的第二个参数就是一个参数对象
 *!/
*/
