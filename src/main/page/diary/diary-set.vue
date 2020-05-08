<template>
  <!--  日记集-->
  <div>
    <div class="block">
      <el-row>
        <el-col :span="6" v-for="(value, index) in diarySet" :key="value.id" :offset=" (index%3) > 0 ? 3 : 0" style="margin-bottom:20px;">
          <el-card :body-style="{ padding: '3px'}" shadow="hover">
            <img src="@/assets/styles/images/diary.jpg"
                 class="image">
            <div style="padding: 5px;">
              <span>{{value.title}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ formatTime(value.diaryTime) }}</time>
                <el-rate
                  v-model.number="value.mood"
                  :icon-classes="iconClasses"
                  void-icon-class="icon-rate-face-off"
                  disabled
                  disabled-void-icon-class="icon-rate-face-off"
                  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                </el-rate>
<!--                <el-button class="button" type="primary" icon="el-icon-edit" circle></el-button>-->
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import dateUtil from "../../../utils/date-util"
  import '@/assets/styles/fonts/style.css'      // 笑脸资源文件

  export default {
    name: "DiarySet",                      // 日记集
    props: {                            // 接收父组件的数据


    },
    data() {
      return {
        diarySet:[],
        /**
         * 心情数据
         */
        iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'],


      }
    },
    computed: {                         // 计算属性
      "val": function () {
        return "123";
      }
    },
    watch: {},                           // 侦听器（扩展的计算属性）
    components: {                   // 内部组件
      dateUtil
    },
    methods: {                        // 内部方法
      /**
       * 获取日记集
       */
      fetchDiarySet(id){
        let the = this;
        this.$api.writeDiaryApi.fetchDiarySet({},id).then(res=>{
          console.log("[Method:fetchDiarySet][Result:res]",res);
          the.diarySet = Object.assign([], res.data);
          // date = dateUtil.formatDate(date,'yyyy-MM-dd hh:mm');
        });
      },
      formatTime(time){
        let date = new Date(time);
        return dateUtil.formatDate(date,'yyyy-MM-dd');
      }

    },
    beforeCreate: function () {
    },            // 组件创建前
    created: function () {    // 组件创建完成后
        this.fetchDiarySet("23");
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
  .block {
    padding: 30px;
    width: 90%;
    height: 600px;
    overflow: auto;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
