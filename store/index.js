export const state = () => ({
  allProducts: [],
  featuredProducts: [],
  menProducts: [],
  womenProducts: [],
  cartItems: [],
});

export const getters = {
  /* 
      return items from store
    */
  allProducts: (state) => state.allProducts,
  getCart: (state) => state.cartItems,
  getCartTotal: (state) =>
    state.cartItems.length < 1
      ? "0"
      : state.cartItems
          .map((el) => el.price * el.quantity)
          .reduce((a, b) => a + b),
};

export const actions = {
  async addItemToCart({ commit }, cartItem) {
    await commit("setCartItem", cartItem);
  },
  async deleteCartItem({ commit }, id) {
    await commit("removeCartItem", id);
  },
};

export const mutations = {
  setProducts: (state, products) => (state.allProducts = products),
  setCartItem: (state, item) => state.cartItems.push(item),
  removeCartItem: (state, id) =>
    state.cartItems.splice(
      state.cartItems.findIndex((el) => el.id === id),
      1
    ),
};
