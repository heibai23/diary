## 青葱记录之前端

###青葱记录

+ 目的
  1. 巩固和提升技术
  2. 纪念手机APP《青葱日记》。（目前已经停止维护了）

+ 项目包含前端和后端
  1. 后端：PresentDiary
  2. 前端：diary


### 技术实现笔记
   + 富文本编辑器[vue-quill-editor](https://blog.csdn.net/TauCrus/article/details/88801941--https://www.jianshu.com/p/1675bcd396a2)：record-bit.vue
   + 交互axios：api文件夹
   + [mock模拟](https://www.cnblogs.com/steamed-twisted-roll/p/10823871.html)：mock.js
   + element-ui
      + 时间轴el-timeline：time-line.vue
      + 评分el-rate：diary-set.vue
   + 工具类
      + 日期工具类-获取当前日期：date-util.js
   + 文件上传下载（系统中暂未用到，但功能已实现）
      + 上传uploadFile：record-bit.vue
      + 下载downloadImage：time-line.vue

