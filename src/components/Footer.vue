<template>
    <div>
        <el-row>
          <el-col :span="24">
             copyright by Mango Cheng
          </el-col>
        </el-row>
    </div>
</template>

<script>
    //  import xxx from  "./Header.vue"            // 引入其他组件

    export default {
        name: "Footer",                      // 底部
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
        components: {},                      // 内部组件
        methods: {},                         // 内部方法
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
