<template>
  <div class="max-w-screen-md mx-auto">
    <div v-for="product in products" :key="product.id" class="md:flex block">
      <div class="md:w-1/2 w-2/3 p-5 self-center">
        <img v-bind:src="product.image" alt="" class="rounded-lg self-center" />
      </div>
      <div class="productInfo">
        <h2>{{ product.name }}</h2>
        <h3>$ {{ product.price }}</h3>
        {{ product.description }}
        <button @click="buy()" class="orderButton">
          <h4 class="m-0 self-center">Order</h4>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "Syzygium Luehmannii Pet Nat 2022",
          price: "30",
          description:
            "A naturally sparkling wine that's unfiltered and kept as un-messed with as possible. With no added preservatives, eggs or dairy products.",
          image: "IMG_20220122_133437_crop.jpg",
        },
      ],
      stripe: null,
      loading: false,
    };
  },
  methods: {
    async buy() {
      try {
        this.loading = true;
        const { data } = await this.$axios.post("/api/checkout", {
          order: {
            name: this.product.name,
            description: this.product.description,
            images: this.product.images,
            amount: this.product.amount * 100,
            currency: this.product.currency,
            quantity: 1,
          },
          slug: this.$route.params.slug,
        });
        this.stripe.redirectToCheckout({ sessionId: data.id });
      } catch (err) {
        alert(err);
        this.loading = false;
      }
    },
  },
  mounted() {
    this.stripe = Stripe(
      "pk_test_51LA4hyDaq4McwyoxOh9SA8kmKuixVcPYpd89XWaVr5xkfMRU0F0VxYuB4kE615rsNeBbmA8CAKMEr7pbG6jmU6bv00kGBsPECy"
    );
  },
};
</script>
