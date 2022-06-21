<template>
  <nav>
    <ul
      class="flex flex-col items-center justify-center gap-6 text-center md:flex-row"
    >
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="about">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="shop">Shop</nuxt-link>
      </li>
      <li>
        <nuxt-link to="contact">Contact</nuxt-link>
      </li>
      <li>
        <nuxt-link to="contact_form">Contact Form</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.router-link-active {
  @apply text-hover;
}
</style>
