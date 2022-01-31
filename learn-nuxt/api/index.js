import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.baseUrl
})

function fetchProducts(id) {
  return instance.get(`/products`)
}

function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}

function fetchProductByKeyword(keyword) {
  return instance.get(`/products`, {
    params: {
      name_like: keyword,
    },
  })
}

function createCartItem(cartItem) {
  return instance.post('/carts', cartItem);
}

function fetchCartItems() {
  return instance.get(`/carts`)
}

export { fetchProducts, fetchProductById, fetchProductByKeyword, createCartItem, fetchCartItems }
