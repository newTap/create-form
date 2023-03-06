<template>
  <div class="common-layout">
    <el-container class="fc-container">
      <AsideComponents />
      <el-main>Main</el-main>
      <el-aside width="200px">Aside2</el-aside>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import AsideComponents from "@/components/AsideComponents/index.vue";
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
});
</script>
<style scoped>
.common-layout {
  height: 100%;
}
.fc-container {
  height: 100%;
}
</style>
