<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts">
export default {
  head() {
    return {
      title: "Silvagenitus",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: `favicon.png`,
        },
      ],
      script: [{ src: "https://js.stripe.com/v3/" }],
    };
  },
};
</script>
