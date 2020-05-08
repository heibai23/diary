/**
 * Author：Mango Cheng
 * Date: 2019/12/21
 * Time: 21:01
 * Description: 接口集中管理
 */

// 首页接口
import homeApi from './home-api'
// 记录点滴接口
import recordBitApi from './record-bit-api'
// 日记接口
import writeDiaryApi from './write-diary-api'


// 其他模块的接口……

// 导出接口
export default {
  homeApi,
  recordBitApi,
  writeDiaryApi
}
