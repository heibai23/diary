/**
 * Author：Mango Cheng
 * Date：2019/12/30
 * Time：19:24
 * Description：mock数据接口
 */
import Mock from 'mockjs' //引入mockjs，npm已安装
import { Random } from 'mockjs' // 引入random对象,随机生成数据的对象，（与占位符@一样）
Mock.setup({
  timeout:1000  //设置请求延时时间
})

const fetchBitData = function(option){ //定义请求数据方法
  let datalist = []
  for (let i = 0; i < 20; i += 1) {
    const o = {  //mockjs模拟随机生成数据，生成20条
      id: Random.guid(),
      title: Random.cparagraph(1),
      content: Random.cparagraph(),
      imageList: [ Random.dataImage() ],
      timestamp:Random.date('yyyy-MM-dd') + ' ' + Random.time('HH:mm'),
    }
    datalist.push(o)
  }
  return{
    data:datalist
  }
}
const recordBit = function(){
  return "dd";
}
Mock.mock('/bit/fetchBitData', /post|get/i,fetchBitData) //调用模拟数据方法
Mock.mock('/bit/recordBit', /post|get/i,recordBit) //调用模拟数据方法
