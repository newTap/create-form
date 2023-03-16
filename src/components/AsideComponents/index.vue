<template>
  <el-aside width="250px">
    <div class="components">
      <template v-for="category in data" :key="category.name">
        <p class="category-name">
          {{ category.name }}
        </p>
        <Draggable
          :list="category.list"
          :group="{ name: category.name }"
          :sort="false"
          item-key="name"
        >
          <template #item="{ element }">
            <div class="components-tag">
              <div class="">
                {{ element.name }}
              </div>
            </div>
          </template>
        </Draggable>
      </template>
    </div>
  </el-aside>
</template>
<script lang="ts" setup>
import { reactive, defineComponent } from "vue";
// eslint-disable-next-line import/no-extraneous-dependencies
import Draggable from "vuedraggable";
</script>

<script lang="ts">
import { componentsList } from "@/config";
const data = reactive(componentsList);

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
