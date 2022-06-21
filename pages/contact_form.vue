<template>
  <div class="flex items-center justify-center h-screen">
    <div
      class="bg-hover w-screen max-w-xl px-4 py-6 pt-8 mx-4 rounded-xl bg-opacity-70"
    >
      <form
        action="https://api.staticforms.xyz/submit"
        method="post"
        class="flex flex-col"
      >
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <input type="text" name="honeypot" style="display: none" />
        <input
          type="hidden"
          name="accessKey"
          value="46b1bac2-86a9-4669-a0a8-e0ec573d7050"
        />
        <input
          type="hidden"
          name="subject"
          value="Contact us from - example.com"
        />
        <input type="hidden" name="replyTo" value="@" />
        <input
          type="hidden"
          name="redirectTo"
          value="https://example.com/contact/success"
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
