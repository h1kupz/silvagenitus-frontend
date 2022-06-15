<template>
  <div class="max-w-screen-md mx-auto">
    <div
      v-for="product in products.data"
      :key="product.id"
      class="md:flex block"
    >
      <!--      <nuxt-link :to="`/products/${product.id}`"> -->
      <div class="productImg">
        <img
          src="http://localhost:1337/uploads/IMG_20220122_133437_8e50b69e87.jpg"
          alt=""
          class="rounded-lg self-center"
        />
      </div>
      <div class="productInfo">
        <h2>{{ product.attributes.Name }}</h2>
        <h3>$ {{ product.attributes.Price }}</h3>
        {{ product.attributes.Description }}
        <div class="orderButton">
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
