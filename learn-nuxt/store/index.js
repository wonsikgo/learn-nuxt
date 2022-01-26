export const state = () => ({
    cartItem: [],
})

export const mutations = {
    addCartItem(state, cartItem) {
        console.log(cartItem);
        state.cartItem.push(cartItem);
        console.log(state.cartItem);
    }
}