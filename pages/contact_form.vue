<template>
  <div class="flex items-center justify-center h-screen">
    <div
      class="bg-hover w-screen max-w-xl px-4 py-6 pt-8 mx-4 rounded-xl bg-opacity-70"
    >
      <form
        action="https://fabform.io/f/-rm95fD"
        method="post"
        class="flex flex-col"
      >
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          class="rounded-t-lg"
        />
        <input name="email" type="email" placeholder="Email" required />
        <textarea
          name="message"
          type="text"
          placeholder="Message"
          required
          class="rounded-b-lg"
        />
        <button class="orderButton self-center" type="submit">
          <h4 class="m-0 self-center">Submit</h4>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: "homecontact",
});
</script>
