<template>
  <div>
    <el-form ref="diaryForm" :model="diaryForm" label-width="80px">
      <!--日期-->
      <el-form-item prop="diary_time">
        <el-row>
          <el-col :span="12">
            <el-date-picker
              v-model="diaryForm.diaryTime"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions">
            </el-date-picker>
          </el-col>
        </el-row>
      </el-form-item>
      <!--天气、心情-->
      <el-form-item label="心情：" prop="mood">
        <el-row style="margin-top: 10px;">
          <el-col :span="12">
            <el-rate
              v-model="diaryForm.mood"
              :icon-classes="iconClasses"
              void-icon-class="icon-rate-face-off"
              :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            </el-rate>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="标题：" prop="title">
        <el-row>
          <el-col :span="12">
            <el-input v-model="diaryForm.title"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="内容：" prop="richContent">
        <el-row>
          <el-col :span="12">
            <el-card style="height: 380px;">
              <quill-editor v-model="diaryForm.richContent" ref="myQuillEditor" style="height: 250px;"
                            :options="editorOption">
              </quill-editor>
            </el-card>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveDiary()">保存</el-button>
        <el-button @click="clearData('diaryForm')">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {
    quillEditor
  } from 'vue-quill-editor'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import '@/assets/styles/fonts/style.css'
  import dateUtil from "../../../utils/date-util";      // 笑脸资源文件


  export default {
    name: "WriteDiary",                      // 写日记
    props: {                            // 接收父组件的数据
    },
    data() {
      return {
        /**
         * 日记表单数据
         */
        diaryForm: {
          diaryTime: dateUtil.getCurrentTime('yyyy-mm-dd HH:mm'),   // new Date().getTime(),   // 日期
          mood: 0,    // 心情
          title:'',         // 标题
          richContent:'',     // 内容
        },
        /**
         * 日期快捷选项
         */
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        /**
         * 心情数据
         */
        iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'],
        editorOption:{},    // 编辑器配置项
      }
    },
    computed: {                         // 计算属性
      "val": function () {
        return "123";
      }
    },
    watch: {},                           // 侦听器（扩展的计算属性）
    components: {                 // 内部组件
      quillEditor
    },
    methods: {
      /**
       * 清空数据
       */
      clearData(formName) {
        this.$refs[formName].resetFields();
      },
      /**
       * 保存日记
       */
      saveDiary(){
        // 1.参数
        let param = Object.assign({},this.diaryForm);
        console.log("[Method:saveDiary][Param:param]",param);
        // 2.接口
        let the = this;
        this.$api.writeDiaryApi.writeDiary(JSON.stringify(param)).then(res=>{
          console.log("[Method:saveDiary-then][Data:res]",res)
          if(res.status == 200){
            the.clearData("diaryForm")
            the.$message({
              message: '保存成功',
              type: 'success'
            });

          }
        });


      },
    },
    beforeCreate: function () {
    },            // 组件创建前
    created: function () {
    },                 // 组件创建完成后
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
  body {

  }
</style>
