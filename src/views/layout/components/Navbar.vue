<template>
  <section>
    
    <router-view></router-view>
    <breadcrumbs></breadcrumbs>
    <router-link to="/">Home</router-link>
    <router-link to="/fxd">Foo</router-link>
    <el-menu class="navbar" mode="horizontal">

      
      


    </el-menu>
  </section>
</template>

<script>
import Vue from 'vue'
import VueBreadcrumbs from 'vue-breadcrumbs'

Vue.use(VueBreadcrumbs,{
  template: '<nav class="breadcrumb" v-if="$breadcrumbs.length"> ' +
    '<router-link class="breadcrumb-item" v-for="(crumb, key) in $breadcrumbs" :to="linkProp(crumb)" :key="key">{{ crumb | crumbText }}</router-link> ' +
    '</nav>'
})

export default {
  name: "NavBar"

};
</script>

<style lang="stylus" scoped></style>