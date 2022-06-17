<template>
  <div
    class="bg-[url('@/HomeBG.jpg')] bg-cover bg-left w-screen mx-auto h-screen"
  >
    <div class="relative font-body flex flex-col h-screen">
      <HeaderSection />
      <section class="">
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
