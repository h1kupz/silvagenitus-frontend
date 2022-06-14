<template>
  <header class="fixed z-50 w-full py-2">
    <div class="grid items-center w-full grid-cols-12 px-4 mx-auto">
      <div class="col-span-3"></div>
      <div class="col-span-6">
        <NavBar class="hidden md:block" />
      </div>
      <div class="flex items-center justify-end col-span-3">
        <button title="Menu" class="p-1 ml-4" @click="mobileMenuOpen = true">
          <svg
            class="w-8 h-8 md:hidden text-primary hover:text-hover"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
    <transition name="menu">
      <MobileMenu v-if="mobileMenuOpen" @close="mobileMenuOpen = false" />
    </transition>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false);
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.5s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}
</style>
