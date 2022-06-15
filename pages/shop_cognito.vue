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
        <nuxt-link to="shop_checkout">
          <button
            class="bg-primary text-secondary rounded-lg w-32 h-10 mt-6 flex justify-center hover:bg-hover"
          >
            <h4 class="m-0 self-center">Order</h4>
          </button>
        </nuxt-link>
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
