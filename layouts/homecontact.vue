<template>
  <div
    class="bg-[url('/HomeBG.jpg')] bg-cover bg-left w-screen mx-auto h-screen"
  >
    <div class="relative font-body flex flex-col h-screen">
      <HeaderSection />
      <section>
        <slot />
        <div class="fixed bottom-40 right-20">
          <h2 class="silvagenitus">silvagenitus</h2>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
body {
  -webkit-font-smoothing: antialiased;
}
</style>
