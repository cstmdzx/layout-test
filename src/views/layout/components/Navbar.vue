<template>
<<<<<<< HEAD
  <el-menu mode="horizontal">
    <Push isOpen='true' noOverlay>
      <router-link to="./fxd">首页</router-link>

    </Push>
  </el-menu>
=======
  <section>
    
    <router-view></router-view>
    <breadcrumb></breadcrumb>
    <el-menu class="navbar" mode="horizontal">
      
    </el-menu>
  </section>
>>>>>>> 29514e5f02a73c69dc9067945de68efd3e1cc1fa
</template>

<script>
import Breadcrumb from '@/components/Breadcrumbs'

/* Vue.use(VueBreadcrumbs) */
export default {
  name: "NavBar",
  components:{
    Breadcrumb
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>