<template>
  <div class="flex items-center justify-center h-screen">
    <div>
      <form
        name="contact"
        method="POST"
        action="/thankyou/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <input type="text" name="name" required placeholder="Name" />
        </div>
        <div>
          <input type="email" name="email" required placeholder="Email" />
        </div>
        <div>
          <textarea name="message" required placeholder="Message"></textarea>
        </div>
        <div>
          <button class="orderButton" type="submit" value="Submit">
            <h4 class="m-0 self-center">Submit</h4>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: "homecontact",
});
</script>
