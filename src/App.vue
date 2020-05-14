<template>
  <el-container>
    <!--头部-->
    <el-header class="header">
      <Header></Header>
    </el-header>
    <el-container>
      <!--侧边栏-->
      <el-aside width="200px">
        <nav-menu></nav-menu>
      </el-aside>
      <el-container>
        <!--中心-->
        <el-main>
          <router-view></router-view>
        </el-main>
        <!--底部-->
        <el-footer class="footer">
          <Footer></Footer>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>

  import Header from "./components/Header"
  import NavMenu from "./components/NavMenu"
  import Footer from "./components/Footer"

  export default {
    name: 'App',
    components: {
      'NavMenu': NavMenu,
      'Header': Header,
      'Footer': Footer

    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .header {
    background-color: #3ac26ac9;
    color: #fff;
    line-height: 60px;
  }

  .footer{
    background-color: #f5f7fa;
    color: #ec7d1e;
    line-height: 60px;
  }
</style>
