<template>
  <div class="menu-wrapper">
      <div v-for="item in routes" :key="item.children[0].name"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>