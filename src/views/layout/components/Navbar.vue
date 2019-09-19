<template>

  <section>
    
    <!-- <router-view></router-view> -->
    
    <el-menu class="navbar" mode="horizontal">
      <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isactive="sidebar.opened"></hamburger>
      <breadcrumb></breadcrumb>
    </el-menu>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
import Breadcrumb from '@/components/Breadcrumbs'
import Hamburger from '@/components/Hamburger'

/* Vue.use(VueBreadcrumbs) */
export default {
  name: "NavBar",
  components:{
    Breadcrumb,
    Hamburger
  },
  computed:{
    ...mapGetters([
      'sidebar'
    ])
  },
  methods:{
    toggleSideBar(){
      this.$store.dispatch('ToggleSideBar')
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
    .hamburger-container {
      line-height: 58px;
      height: 50px;
      float: left;
      padding: 0 10px;
      outline: none !important;
    }
  }
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