<template>
  <el-menu mode="horizontal">
    <Push isOpen='true' noOverlay>
      <router-link to="./fxd">首页</router-link>

    </Push>
  </el-menu>
</template>

<script>
import { Push } from "vue-burger-menu";

export default {
  name: "NavBar",
  components: {
    Push
  }
};
</script>

<style lang="stylus" scoped></style>