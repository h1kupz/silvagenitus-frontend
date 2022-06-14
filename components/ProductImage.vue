<template>
  <div>
    <img :src="imageUrl" :alt="product.attributes.Title" loading="lazy" />
  </div>
</template>

<script setup>
const props = defineProps({
  product: Object,
});

const config = useRuntimeConfig();
const imageUrl = computed(() => {
  return `${config.API_URL}${props.product.attributes.Image.data.attributes.formats.medium.url}`;
});
</script>
