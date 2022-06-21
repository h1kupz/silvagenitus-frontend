<template>
  <div class="flex items-center justify-center h-screen">
    <form
      action="https://fabform.io/f/-rm95fD"
      method="post"
      class="flex flex-col"
    >
      <input name="name" type="text" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <textarea name="message" type="text" placeholder="Message" required />
      <button class="orderButton" type="submit">
        <h4 class="m-0 self-center">Submit</h4>
      </button>
    </form>
  </div>
</template>

<script>
definePageMeta({
  layout: "homecontact",
});
</script>
