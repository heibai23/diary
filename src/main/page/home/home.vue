<template>
  <div class="home-page">
    <el-row>
      <el-col :span="12">
        <div class="grid-content ">
          <time-line></time-line>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <diary-set></diary-set>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import TimeLine from "../bit/time-line"            // 引入时间轴组件
  import DiarySet from "../diary/diary-set"            // 引入日记集组件

  export default {
    name: "Home",                      // 主页
    props: {                            // 接收父组件的数据


    },
    data() {
      return {}


    },
    computed: {                         // 计算属性
      "val": function () {
        return "123";
      }
    },
    watch: {},                           // 侦听器（扩展的计算属性）
    components: {                   // 内部组件
      TimeLine, DiarySet

    },
    methods: {
      /**
       * 首页获取时间轴数据
       * @param param
       */
      /*fetchTimeLines(param){
        this.$api.homeApi.fetchTimeLines().then(res=>{
          console.log("******[Method:fetchTimeLines][data:res]",res);
        }).catch(error=>{
          console.log("******[Method:fetchTimeLines][error:error]",error);
        })
      },*/

    },
    beforeCreate: function () {
    },            // 组件创建前
    created: function () {      // 组件创建完成后
      // this.fetchTimeLines();
    },
    beforeMount: function () {
    },             // 组件挂载前
    mounted: function () {
    },                // 组件挂载完成后
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
  .home-page {

  }

  .home-page .grid-content {
    border-radius: 2px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
</style>
