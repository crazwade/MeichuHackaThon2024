<script setup lang="ts">
import Layout from "./layout/Layout.vue";
import { useImagesStore } from "./stores/images";
import { version } from "../package.json";

const imagesStore = useImagesStore();

onBeforeMount(() => {
  imagesStore.preLoadImages();
});

onMounted(() => {
  console.log("version", version);
});
</script>

<template>
  <Layout />
</template>
