import Vue from 'vue'
import Router from 'vue-router'
import Home from '../main/page/home/home'       // 主页
import TimeLine from "../main/page/bit/time-line"   // 时间轴
import RecordBit from "../main/page/bit/record-bit"    // 记点滴
import DiarySet from "../main/page/diary/diary-set"    // 日记集
import WriteDiary from "../main/page/diary/write-diary"    // 写日记
import CalendarZone from "../main/page/calendar/CalendarZone"   // 日历
import TestArea from "../main/page/test-area"    // 测试区


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path:'/TimeLine',
      name:'TimeLine',
      component: TimeLine
    },{
      path:'/RecordBit',
      name:'RecordBit',
      component: RecordBit
    },{
      path:'/DiarySet',
      name:'DiarySet',
      component: DiarySet
    },{
      path:'/WriteDiary',
      name:'WriteDiary',
      component: WriteDiary
    },{
      path:'/CalendarZone',
      name:'CalendarZone',
      component:CalendarZone

    },{
      path:'/TestArea',
      name:'TestArea',
      component: TestArea
    },
  ]
})
