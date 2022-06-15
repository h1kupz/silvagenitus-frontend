<template>
  <div id="cognito">
    <div v-html="script" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      script:
        "<script src='https://www.cognitoforms.com/f/seamless.js' data-key='6Ax0zmUI6UeB6_7JUBHcjA' data-form='16'><\/script>",
    };
  },
};
</script>
