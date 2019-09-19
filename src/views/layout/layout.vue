<template>
  <div>
    <NavBar></NavBar>
    <AppMain id='page-wrap'></AppMain>
  </div>
</template>

<script>
import AppMain from "./components/AppMain";
import NavBar from "./components/Navbar";
export default {
  name: "layout",
  components: {
    AppMain,
    NavBar
  }
};
</script>

<style lang="stylus" scoped></style>