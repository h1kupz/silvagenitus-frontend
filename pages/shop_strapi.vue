<template>
  <div class="max-w-screen-md mx-auto">
    <div
      v-for="product in products.data"
      :key="product.id"
      class="md:flex block"
    >
      <!--      <nuxt-link :to="`/products/${product.id}`"> -->
      <div class="md:w-1/2 w-2/3 p-10 self-center">
        <img
          src="http://localhost:1337/uploads/IMG_20220122_133437_8e50b69e87.jpg"
          alt=""
          class="rounded-lg self-center"
        />
      </div>
      <div class="md:w-1/2 w-2/3 px-10 pb-10 self-center">
        <h2 class="font-bold">{{ product.attributes.Name }}</h2>
        <h3>$ {{ product.attributes.Price }}</h3>
        {{ product.attributes.Description }}
        <div
          class="bg-primary text-secondary rounded-lg w-32 h-10 mt-6 flex justify-center hover:bg-hover"
        >
          <h4 class="m-0 self-center">Order</h4>
        </div>
      </div>
      <!--      </nuxt-link> -->
    </div>
  </div>
</template>

<script setup>
const { data: products } = await useFetch(
  "http://localhost:1337/api/products?populate=*"
);
</script>
