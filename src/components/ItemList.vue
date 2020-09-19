<template>
  <div class="item-list">
    <memo-item v-for="item of memoArr" :key="item.id" :memo="item" />
  </div>
</template>

<script lang="ts">
import ItemData from "@/model/ItemData";
import { Component, Vue } from "vue-property-decorator";
import MemoItem from "./MemoItem.vue";

@Component({
  components: {
    MemoItem
  }
})
export default class ItemList extends Vue {
  //笔记数组
  memoArr: Array<ItemData> = this.$store.state.aHelper.memoList;
}
</script>

<style scoped lang="scss">
.item-list {
  margin: auto;
  width: 1250px;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
