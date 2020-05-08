/**
 * Author：Mango Cheng
 * Date：2020/1/12
 * Time：19:42
 * Description：记录点滴
 */

import base from './base'; // 导入接口域名列表-多环境
import axios from 'axios'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

axios.defaults.withCredentials = false;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

const recordBit = {
  // post提交
  recordBit (params) {
    return axios.post(`${base.dev}/bit/recordBit`, params, {
        headers: {
          // 'Content-Type': 'multipart/form-data'
        }
      }
    );
  },
  /**
   * 获取点滴
   */
  fetchTimeLines(id){
    return axios.get(`${base.dev}/bit/fetchTimeLines/${id}`,{})
  },


  uploadFile(params){
    return axios.post(`${base.dev}/file/upload`, params, {}
    );
  },

}

export default recordBit;
