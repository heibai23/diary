/**
 * User: zhoukc
 * Date: 2019/12/18
 * Time: 19:15
 * Description: 菜单配置文件
 */
module.exports = [{
  name: '点滴',
  id: 'bit',
  sub: [{
    name: '时间轴',
    componentName: 'TimeLine'
  }, {
    name: '记点滴',
    componentName: 'RecordBit'
  }]
}, {
  name: '日记',
  id: 'diary',
  sub: [{
    name: '日记集',
    componentName: 'DiarySet'
  }, {
    name: '写日记',
    componentName: 'WriteDiary'
  }],
}, {
  name: '日历',
  id: 'calendar',
  sub: [{
    name: '日历',
    componentName: 'calendarZone'
  }]
}, {
  name: '照片集',
  id: 'photo',
  sub: [{
    name: '照片集',
    componentName: 'photoSet'
  }]
}, {
  name: '测试',
  id: 'test',
  sub: [{
    name: '测试区',
    componentName: 'TestArea'
  }]
}


]
