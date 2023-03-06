<template>
  <el-aside width="250px">
    <div class="components">
      <template v-for="category in componentsList" :key="category.name">
        <p class="category-name">
          {{ category.name }}
        </p>
        <ul>
          <li
            v-for="item in category.list"
            :key="item.name"
            class="components-tag"
          >
            <div class="">
              {{ item.name }}
            </div>
          </li>
        </ul>
      </template>
    </div>
  </el-aside>
</template>
<script lang="ts" setup>
import { componentsList } from "@/config";
</script>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "asideComponents",
});
</script>
<style scoped>
.category-name {
  padding: 10px 12px;
}
.components {
  height: 100%;
  background-color: rgb(138, 114, 83);
  padding: 10px 0;
}
.components ul {
  width: 100%;
  overflow: hidden;
  padding: 0 8px;
}
.components-tag {
  width: 48%;
  margin: 1%;
  float: left;
  text-align: center;
  background-color: beige;
  cursor: move;
}
</style>
