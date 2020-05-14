/**
 * User: zhoukc
 * Date: 2019/12/18
 * Time: 19:15
 * Description: 菜单配置文件
 */
module.exports = [{
  name: '点滴',
  id: 'bit',
  icon: 'el-icon-edit',
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
  icon: 'el-icon-notebook-1',
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
  icon: 'el-icon-date',
  sub: [{
    name: '日历',
    componentName: 'calendarZone'
  }]
}, {
  name: '照片集',
  id: 'photo',
  icon: 'el-icon-picture',
  sub: [{
    name: '照片集',
    componentName: 'photoSet'
  }]
}, {
  name: '测试',
  id: 'test',
  icon: 'el-icon-pear',
  sub: [{
    name: '测试区',
    componentName: 'TestArea'
  }]
}


]
