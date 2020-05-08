/**
 * Author：Mango Cheng
 * Date: 2019/12/21
 * Time: 20:18
 * Description: 主页接口地址
 */

import base from './base'; // 导入接口域名列表-多环境
import axios from 'axios'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

axios.defaults.withCredentials = false;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


const home = {

  // 时间轴数据
  fetchTimeLines(params) {
    return axios.post(`${base.dev}/home/fetchTimeLines`, qs.stringify(params || {}), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        }
      }
    );
  },
  downloadFileInfo(params) {
    return axios.post(`${base.dev}/home/download`, (params || {}), {
        headers: {
          'Content-Type': 'application/json; application/octet-stream'
        },
        responseType: 'blob'
      }
    );
  },




  /*// 新闻详情,演示
  articleDetail (id, params) {
    return axios.get(`${base.sq}/topic/${id}`, {
      params: params
    });
  },
  // post提交
  login (params) {
    return axios.post(`${base.sq}/accesstoken`, qs.stringify(params));
  }*/
  // 其他接口…………
}

export default home;





