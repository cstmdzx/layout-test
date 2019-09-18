<template>
  <section>
    
    <router-view></router-view>
    <breadcrumb></breadcrumb>
    <el-menu class="navbar" mode="horizontal">
      
    </el-menu>
  </section>
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