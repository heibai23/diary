<template>
  <div>
    <el-row class="tac">
      <el-col :span="24">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          unique-opened
          router
          active-text-color="#ffd04b">
          <el-submenu v-for="item in menu" :index="item.id">
            <template slot="title">
              <i :class=item.icon></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group v-for="subItem in item.sub">
              <el-menu-item :index="subItem.componentName">{{subItem.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import menu from "../../config/menu-config"            // 引入菜单配置文件

  export default {
    name: "",                      // 名称
    props: {                            // 接收父组件的数据
    },
    data() {
      return {
        menu: menu,
        isCollapse: true,       // 菜单折叠、展开
      }
    },
    computed: {                         // 计算属性
      "val": function () {
        return "123";
      }
    },
    watch: {},                           // 侦听器（扩展的计算属性）
    components: {},                      // 内部组件
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }


    },                         // 内部方法
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
