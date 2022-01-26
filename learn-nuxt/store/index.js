export const state = () => ({
    cartItem: [],
})

export const mutations = {
    addCartItem(state, cartItem) {
        const newCartItem = {
            ...cartItem,
          imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`,
        }
        state.cartItem.push(newCartItem);
    }
}