import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
})

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

export { fetchProductById, fetchProductByKeyword, createCartItem }
