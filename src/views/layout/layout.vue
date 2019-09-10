<template>
  <div>
    <NavBar></NavBar>

    <AppMain>
      <h1>layout test</h1>
    </AppMain>
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