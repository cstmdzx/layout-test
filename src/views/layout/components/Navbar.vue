<template>

  <section>
    
    <!-- <router-view></router-view> -->
    
    <el-menu class="navbar" mode="horizontal">
      <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isactive="sidebar.opened"></hamburger>
      <breadcrumb></breadcrumb>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img class="user-avatar" :src="null">
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu class="user-dropdown" slot="dropdown">
          <el-dropdown-item>
            <router-link class="inlineBlock" to="/">首页</router-link>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <span @click="function(){}" style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>

      </el-dropdown>
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
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      outline: none !important;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
</style>