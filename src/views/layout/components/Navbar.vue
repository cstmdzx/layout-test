<template>
  <section>
    
    <router-view></router-view>
    <el-menu class="navbar" mode="horizontal">
      <transition-group>
        <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="item.path">
          <span v-if="item.redirect==='noredirect'||index==$route.matched.length-1" class="no-redirect">{{item.meta.title}}</span> 
          <router-link v-else :to="item.redirect||item.path">{{item.meta.title}}</router-link>
        </el-breadcrumb-item>
      </transition-group>
    </el-menu>
  </section>
</template>

<script>
import Vue from 'vue'
import VueBreadcrumbs from 'vue-breadcrumbs'

Vue.use(VueBreadcrumbs)
/* Vue.use(VueBreadcrumbs) */
export default {
  name: "NavBar"
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