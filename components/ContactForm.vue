<template>
  <div class="flex flex-col">
    <form name="contact-form" @submit.prevent="handleSubmit()">
      <div class="row">
        <input
          v-model="formData.from_name"
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
        />
      </div>
      <input
        v-model="formData.from_email"
        type="email"
        name="from_email"
        placeholder="you@email.com"
        required
      />
      <input
        v-model="formData.msg_subject"
        type="text"
        name="msg_subject"
        placeholder="Subject"
        required
      />
      <textarea
        v-model="formData.msg_body"
        name="msg_body"
        placeholder="What are you writing about?"
        required
      ></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      formData: {
        from_name: "",
        from_email: "",
        msg_subject: "",
        msg_body: "",
      },
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      // Must post to a path not handled by the SSR.
      // Path must exist
      fetch("/contactform", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: this.encode({
          "form-name": "contact-form",
          ...this.formData,
        }),
      })
        .then(() => alert("Success!"))
        .catch((err) => alert("Error: %s", err))
        .finally(() => {
          console.log("formData: %s", JSON.stringify(this.formData));
        });
    },
  },
};
</script>
