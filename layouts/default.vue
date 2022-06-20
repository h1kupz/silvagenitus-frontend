<template>
  <div class="relative font-body flex flex-col h-screen">
    <HeaderSection />
    <section class="flex h-max my-auto md:mt-auto mt-20">
      <slot />
    </section>
  </div>
</template>

<style scoped>
body {
  -webkit-font-smoothing: antialiased;
}
</style>
