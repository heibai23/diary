<template>
  <div>
    <el-form ref="bitForm" :model="bitForm" label-width="80px">
      <el-form-item>
        <el-tag>{{bitForm.recordTime}}</el-tag>
      </el-form-item>
      <el-form-item label="标题：" prop="title">
        <el-row>
          <el-col :span="12">
            <el-input v-model="bitForm.title"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="内容：" prop="content" :colspan="12">
        <el-row>
          <el-col :span="12">
            <el-card style="height: 380px;" >
              <quill-editor v-model="bitForm.richContent" ref="myQuillEditor" style="height: 250px;" :options="editorOption">
              </quill-editor>
            </el-card>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="标签：" prop="tag">
        <el-row>
          <el-col :span="3">
            <el-input
              clearable
              v-model="bitForm.tag">
              <el-button slot="append" icon="el-icon-lollipop" @click="addTag(bitForm.tag)"></el-button>
            </el-input>
          </el-col>
          <el-col :span="9">
            <div class="tag-area">
              <el-tag v-for="item in tags" v-if="tags" class="tag-area_one" closable @close="removeTag(item)">{{item}}</el-tag>
            </div>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveBit()">保存</el-button>
        <el-button @click="clearData('bitForm')">清空</el-button>
      </el-form-item>


    </el-form>
  </div>
</template>

<script>
  import dateUtil from "../../../utils/date-util"            // 引入其他组件
  import {
    quillEditor
  } from 'vue-quill-editor'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  // import axios from 'axios'

  // import mock from "@/mock/mock"

  export default {
    name: "RecordBit",                      // 记点滴
    props: {                            // 接收父组件的数据

    },
    data() {
      return {
        /**
         * 点滴表单数据
         */
        bitForm: {
          recordTime: dateUtil.getCurrentTime('yyyy-mm-dd HH:mm'),      // 时间戳
          // recordTime:"",
          title: '',       // 标题
          richContent:'',   // 富文本内容
          tag: '',       // 单个标签，仅作页面展示
          tags: '',       // 标签
        },
        tags: [],
        editorOption:{},    // 编辑器配置项
      }
    },
    computed: {                         // 计算属性
      "val": function () {
        return "123";
      }
    },
    watch: {},                           // 侦听器（扩展的计算属性）
    components: {
      dateUtil,quillEditor
    },                      // 内部组件
    methods: {                            // 内部方法
      /**
       * 保存点滴
       */
      saveBit() {
        // 接口参数
        let param = Object.assign({},this.bitForm);
        param.type = 0;
        console.log("param",param);
        // 调用后端接口
        this.$api.recordBitApi.recordBit(JSON.stringify(param)).then(res=>{
          console.log("[Method:recordBit][data:res]",res);
        }).catch(error=>{
          console.log("******[Method:fetchTimeLines][error:error]",error);
        })
      },
      /**
       * 清空数据
       */
      clearData(formName) {
        this.$refs[formName].resetFields();
      },
      /**
       * 添加标签
       */
      addTag(val) {
        // 去除所有空格
        val = val.replace(/\s+/g, "");
        if (val == '') {
          return;
        } else if (this.tags.indexOf(val) > -1) {
          this.bitForm.tag = '';
          return;
        }
        console.log("[Methods:addTag][Params:val]", val);
        this.bitForm.tags += val + ',';
        this.tags.unshift(val);
        this.bitForm.tag = '';
      },
      /**
       * 移除标签
       */
      removeTag(val){
        this.tags.splice(this.tags.indexOf(val), 1);
        this.bitForm.tags = this.bitForm.tags.replace(val + ',', '');
      },
      /**
       * 图片移除
       * @param file
       * @param fileList
       */
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      /**
       * 点击图片列表
       * @param file
       */
      handlePreview(file) {
        console.log(file);
      },
      /**
       * 图片上传超出限制
       * @param files
       * @param fileList
       */
      handleExceed(files, fileList) {
        console.log(files);
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      /**
       * 文件上传前
       */
      beforeUploadFile(param){
        // 进度条
      },
      /**
       * 自定义上传文件：保存上传文件至表单
       */
      uploadFile(param) {
        console.log("[Methods:uploadFile][Params:param]", param);
        this.formData.append("files",param.file);

        /*this.$api.recordBitApi.uploadFile(formData).then(res=>{
          console.log("[Method:recordBit][data:res]",res);
        }).catch(error=>{
          console.log("[Method:fetchTimeLines][error:error]",error);
        });*/
      }

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
  /*标签区域*/
  .tag-area {
    min-width: 150px;
  }

  .tag-area .tag-area_one {
    margin-left: 5px;
  }
</style>
