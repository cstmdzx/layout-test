<template>
   <section>
       <transition name="fade" mode="out-in">
           <router-view></router-view>
           <h1 style="text-align:center">appmain</h1>
       </transition>
   </section>
</template>

<script>
    export default {
        name:'AppMain'
    }
</script>

<style lang="scss" scoped>

</style>

