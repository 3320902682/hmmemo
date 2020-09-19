<template>
  <el-container id="app">
    <el-header>
      <menu-bar />
    </el-header>

    <el-main>
      <item-list />
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuBar from "./components/MenuBar.vue";
import ItemList from "./components/ItemList.vue";

@Component({
  components: {
    MenuBar,
    ItemList
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  box-sizing: border-box;
  height: 100vh;
  margin: 0;
}
</style>
