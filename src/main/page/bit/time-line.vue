<template>
  <!--  时间轴-->
  <div>
    <div class="block" style="overflow:auto">
      <el-timeline reverse v-infinite-scroll="load" infinite-scroll-disabled="disabled">
        <el-timeline-item class="time-line"
                          v-for="(activity, index) in bits"
                          :key="index"
                          :icon="activity.icon"
                          :type="activity.type"
                          :color="activity.color"
                          :size="activity.size"
                          placement="top"
                          :timestamp="activity.time">
          <el-card>
            <h3 style="display: inline-block">{{activity.title}}</h3><el-tag v-if="item != ''" v-for="item in (activity.tags.split(','))" class="tag-area_one">{{item}}</el-tag>
            <p v-html="activity.richContent"></p>
          </el-card>
<!--          <el-button @click="downloadImage">下载</el-button>-->
        </el-timeline-item>
      </el-timeline>
      <p v-if="loading">加载中...</p>
      <p v-else="noMore">没有更多了</p>
      <!--<el-backtop target=".page-component__scroll .el-scrollbar__wrap">
        <div
          style="{
            height: 100%;
            width: 100%;
            background-color: #f2f5f6;
            box-shadow: 0 0 6px rgba(0,0,0, .12);
            text-align: center;
            line-height: 40px;
            color: #1989fa;
          }"
        >
          UP
        </div>
      </el-backtop>-->
    </div>
  </div>
</template>

<script>
  //  import xxx from  "./Header.vue"            // 引入其他组件
  import axios from 'axios'
  import dateUtil from "../../../utils/date-util"


  export default {
    name: "TimeLine",                      // 时间轴
    props: {                            // 接收父组件的数据


    },
    data() {
      return {
        loading: true,
        noMoreFlag: false,
        bits: [],
        /*activities: [{
          content: '支持使用图标',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        }, {
          content: '支持自定义尺寸',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46'
        }, {
          content: '支持自定义尺寸',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46'
        }]*/
      }
    },
    computed: {                         // 计算属性
      noMore() {
        return this.noMoreFlag;
      },
      disabled() {
        return this.loading || this.noMore
      }
    },
    watch: {},                           // 侦听器（扩展的计算属性）
    components: {           // 内部组件
      dateUtil
    },
    methods: {                           // 内部方法
      /**
       * 下拉加载数据
       */
      load() {
        this.loading = true
        setTimeout(() => {
          // 加载数据

          this.loading = false
        }, 2000)
      },
      /**
       * 时间轴 样式渲染
       * @param data
       */
      decorateTimeline(data) {
        $.each(data, function (index, value) {
          value.size = 'large';
          value.type = 'primary';
          value.icon = 'el-icon-orange';
          value.color = '#0bbd87';
        });
        console.log("[Methods:decorateTimeline][Data:data]", data);
        this.loading = false;
      },
      /**
       * 图片下载接口-测试
       */
      downloadImage() {
        var param = {
          type:1
        }
        this.$api.homeApi.downloadFileInfo(JSON.stringify(param)).then(response => {
          console.log("[Method:downloadFileInfo][data:res]", response);

          let data = response.data;
          if (!data) {
            return
          }
          let contentDisposition = response.headers['content-disposition'];
          // let fileName = contentDisposition.substring(contentDisposition.indexOf('=') + 1);
          let fileName = "23.png";
          console.log('fileName=' + fileName);
          let url = window.URL.createObjectURL(new Blob([data]));
          let a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          a.setAttribute('download', fileName);
          document.body.appendChild(a);
          //点击下载
          a.click();
          // 下载完成移除元素
          document.body.removeChild(a);
          // 释放掉blob对象
          window.URL.revokeObjectURL(url);
        }).catch(error => {
          console.log("[Method:fetchTimeLines][error:error]", error);
        })
      }
    },

    beforeCreate: function () {         // 组件创建前
    },
    created: function () {  // 组件创建完成后

      let the = this;
      this.$api.recordBitApi.fetchTimeLines("id").then(res => {
        console.log("[Methods:created/fetchBitData][Result:res]", res);
        the.bits = res.data;
        $.each(the.bits,function(index,value){
          let date = new Date(value.recordTime);
          date = dateUtil.formatDate(date,'yyyy-MM-dd hh:mm');
          the.$set(value,"time",date);
          console.log("[Methods:created/fetchBitData/forEach][Data:the.bits]", the.bits);
        });
        // 时间轴数据 样式再调整
        the.decorateTimeline(the.bits);
      });

    },
    beforeMount: function () {
    },             // 组件挂载前
    mounted: function () {  // 组件挂载完成后

    },
    beforeUpdate: function () {
    },            // 组件更新前
    updated: function () {
    },                 // 组件挂载完成后
    beforeDestroy: function () {
    },            // 组件销毁前
    destroyed: function () {
    }                // 组件销毁完成后
  }
</script>


<style>
  .block {
    padding: 30px;
    width: 90%;
    height: 600px;
  }
  h3 {
    color: #409EFF;
  }
  .block .time-line {
    /*height: 100%;*/
  }
  .tag-area_one {
    margin-left: 20px;
  }
</style>
