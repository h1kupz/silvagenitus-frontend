<template>
  <div class="max-w-screen-md mx-auto">
    <div v-for="product in products" :key="product.id" class="md:flex block">
      <div class="md:w-1/2 w-2/3 p-5">
        <img
          v-bind:src="product.image"
          alt="Syzygium Luehmannii Pet Nat 2022"
          class="rounded-lg self-center"
        />
      </div>
      <div class="productInfo">
        <h2>{{ product.name }}</h2>
        <h3>$ {{ product.price }}</h3>
        {{ product.description }}
        <a
          href="https://buy.stripe.com/test_14k9AHac9fVJcnu144"
          target="_blank"
        >
          <button class="orderButton">
            <h4 class="m-0 self-center">Order</h4>
          </button>
        </a>
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
    };
  },
};
</script>
