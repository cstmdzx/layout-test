<template>
    <el-breadcrumb class="app-breadcrumb" separator="/">
        <transition-group>
            <el-breadcrumb-item v-for="(item,index) in routelist" :key="item.path">
            <span v-if="item.redirect==='noredirect'||index==routelist.length-1" class="no-redirect">{{item.meta.title}}</span> 
            <router-link v-else :to="item.redirect||item.path">{{item.meta.title}}</router-link>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script>
export default {
    name:'breadcrumbs',
    computed: {
        routelist() {
            let matched = this.$route.matched.filter(item => item.name)
            let r0 = matched[0]
            if(r0 && r0.name !== 'home'){
                matched = [{path:'/',meta:{title:'首页'}}].concat(matched)
            }
            return matched
        }
    }

}
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