<template>
  <div class="flex items-center justify-center h-screen">
    <div
      class="bg-hover w-screen max-w-xl px-4 py-6 pt-8 mx-4 rounded-xl bg-opacity-70 z-40"
    >
      <form
        action="https://api.staticforms.xyz/submit"
        method="post"
        class="flex flex-col"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          class="rounded-t-lg"
        />
        <input type="text" name="email" placeholder="Email" />
        <textarea
          name="message"
          placeholder="Message"
          class="rounded-b-lg"
        ></textarea>
        <input type="text" name="honeypot" style="display: none" />
        <input
          type="hidden"
          name="accessKey"
          value="46b1bac2-86a9-4669-a0a8-e0ec573d7050"
        />
        <input
          type="hidden"
          name="subject"
          value="Contact Form - Silvagenitus"
        />
        <input type="hidden" name="replyTo" value="@" />
        <input
          type="hidden"
          name="redirectTo"
          value="https://silvagenitus.netlify.app/thankyou"
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
