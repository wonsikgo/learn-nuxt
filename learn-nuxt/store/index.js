import { fetchCartItems } from '~/api'

export const FETCH_CART_ITMES = 'FETCH_CART_ITMES'

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
    },
    setCartItem(state, cartItems) {
        state.cartItem = cartItems
    }
}

export const actions = {
    async [FETCH_CART_ITMES]({ commit }) {
        const {data} = await fetchCartItems()
        commit('setCartItem', data.map(item => ({
            ...item,
          imageUrl: `${item.imageUrl}?random=${Math.random()}`,
        })))
    },
    async nuxtServerInit(storeContext, nuxtContext) {
        const {data} = await fetchCartItems()
        storeContext.commit('setCartItem', data.map(item => ({
            ...item,
          imageUrl: `${item.imageUrl}?random=${Math.random()}`,
        })))
    }
}