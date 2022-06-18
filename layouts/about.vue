<template>
  <div
    class="bg-[url('/AboutBG.jpg')] bg-contain bg-right mx-auto h-screen bg-no-repeat"
  >
    <div class="relative font-body h-screen">
      <HeaderSection />
      <section class="flex flex-col mx-auto max-w-xl">
        <slot />
      </section>
    </div>
  </div>
</template>

<style scoped>
body {
  -webkit-font-smoothing: antialiased;
}
</style>
