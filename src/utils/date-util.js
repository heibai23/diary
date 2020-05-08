/**
 * Author：Mango Cheng
 * Date：2019/12/28
 * Time：10:52
 * Description：日期工具类
 */

export default class dateUtil{

  /**
   * 获取当前时间
   * @param format yyyy-mm-dd HH:mm:ss.ms
   * @returns {string} 格式 2015-09-05 10:00:00.000
   */
  static getCurrentTime(format) {
    let res = '';
    let nowtime = new Date();
    let year = nowtime.getFullYear();
    let month = padleft0(nowtime.getMonth() + 1);
    let day = padleft0(nowtime.getDate());
    let hour = padleft0(nowtime.getHours());
    let minute = padleft0(nowtime.getMinutes());
    let second = padleft0(nowtime.getSeconds());
    let millisecond = nowtime.getMilliseconds(); millisecond = millisecond.toString().length == 1 ? "00" + millisecond : millisecond.toString().length == 2 ? "0" + millisecond : millisecond;

    switch (format) {

      case 'yyyy-mm-dd HH:mm': {
        res = year + "-" + month + "-" + day + " " + hour + ":" + minute;
      }
        break;
      case 'yyyy-mm-dd HH:mm:ss': {
        res = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
      }
        break;
      case 'yyyy-mm-dd HH:mm:ss.ms': {
        res = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + "." + millisecond;
      }
        break;

      default:
        break;
    }

    return res;
  }

  /**
   * 格式化日期，将时间日期转化为字符串
   * @param date Date类型数据
   * @param fmt 格式类型 如：yyyy-MM-dd hh:mm
   * @returns {void | string | *}
   */
  static formatDate(date,fmt){
    if(/(y+)/.test(fmt)){
      fmt = fmt.replace(RegExp.$1, (date.getFullYear()+'').substr(4-RegExp.$1.length));
    }
    let o = {
      'M+': date.getMonth()+1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for(let k in o){
      let str = o[k]+'';
      if(new RegExp(`(${k})`).test(fmt)){
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length===1)?str:padLeftZero(str));
      }
    }
    return fmt;
  }


}

/**
 * 补齐两位数
 * @param obj
 * @returns {string}
 */
function padleft0(obj) {
  return obj.toString().replace(/^[0-9]{1}$/, "0" + obj);
}

/**
 * 补足时间字符串长度
 * @param str
 * @returns {string}
 */
function padLeftZero(str){
  return ('00'+str).substr(str.length);
}

/*export function getCurrentTime() {
  let mydate = new Date();

  mydate.getYear(); //获取当前年份(2位)

  mydate.getFullYear(); //获取完整的年份(4位,1970-????)

  mydate.getMonth(); //获取当前月份(0-11,0代表1月)

  mydate.getDate(); //获取当前日(1-31)

  mydate.getDay(); //获取当前星期X(0-6,0代表星期天)

  mydate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)

  mydate.getHours(); //获取当前小时数(0-23)

  mydate.getMinutes(); //获取当前分钟数(0-59)

  mydate.getSeconds(); //获取当前秒数(0-59)

  mydate.getMilliseconds(); //获取当前毫秒数(0-999)

  mydate.toLocaleDateString(); //获取当前日期

  let mytime = mydate.toLocaleTimeString(); //获取当前时间
  return mytime;
}

export function getCurrentTime2() {

  return '2019';

}*/
