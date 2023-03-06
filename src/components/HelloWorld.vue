<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
});
</script>

<script setup lang="ts">
defineProps({
  msg: String,
});

const count = ref(0);
defineExpose({
  name: "HelloWorld",
});
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
