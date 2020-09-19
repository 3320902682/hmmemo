<template>
  <el-card class="memo-item">
    <div slot="header">
      <span>{{ memo.title }}</span>
      <i type="text" class="el-icon-delete-solid" @click="handleRemove"/>
      <i type="text" class="el-icon-edit" />
    </div>

    <div class="main">
      <header>
        <span>{{ memo.createTime }}</span>
        <span
          >分类：{{
            $store.state.aHelper.getCategoryName(memo.categoryId)
          }}</span
        >
      </header>

      <div class="content">{{ memo.content }}</div>
    </div>
  </el-card>
</template>

<script lang="ts">
import ItemData from "@/model/ItemData";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class MemoItem extends Vue {
  @Prop() memo!: ItemData;

  //删除方法
  handleRemove(): void {
    if (!window.confirm(`确认要删除【${this.memo.title}】的笔记吗`)) return;

    this.$store.state.aHelper.remove(this.memo.id);
  }
}
</script>

<style scoped lang="scss">
.memo-item {
  width: 300px;
  height: 300px;
  margin: 5px;
  /deep/.el-card__header {
    i {
      float: right;
      margin-left: 10px;
      cursor: pointer;
    }
  }

  /deep/.el-card__body {
    padding-top: 0;
  }

  .main {
    display: flex;
    flex-flow: column;
    header {
      color: #999;
      font-size: 0.8rem;
      display: flex;
      justify-content: space-between;
      margin: 5px 0px;
    }
    .content {
      flex: 1;
      overflow-y: auto;
    }
  }
}
</style>
