/**
 * Author：Mango Cheng
 * Date：2020/3/9
 * Time：19:38
 * Description：写日记API
 */

import base from './base'; // 导入接口域名列表-多环境
import axios from 'axios'; // 导入http中创建的axios实例
import QS from 'qs';
import recordBit from "./record-bit-api"; // 根据需求是否导入qs模块

axios.defaults.withCredentials = false;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

let model = 'diary'

const writeDiary = {
  // post提交
  writeDiary (params) {
    return axios.post(`${base.dev}/diary/writeDiary`,params, {
        headers: {
        }
      }
    );
  },
  fetchDiarySet(params,id){
    return axios.post(`${base.dev}/diary/fetchDiarySet/${id}`,params,{})

  }

}


export default writeDiary;
