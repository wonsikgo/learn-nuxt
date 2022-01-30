<template>
  <div class="list-wrapper">
      <ul>
        <li  v-for="cartItem of $store.state.cartItem" :key="cartItem.id" class="list-item">
          <img class="thumbnail" :src="cartItem.imageUrl" :alt="cartItem.name">
          <div class="desciption">
           <p>{{cartItem.name}}</p>
           <span>{{cartItem.price}}</span>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import {FETCH_CART_ITMES} from '@/store'
export default {
    async fetch() {
        await this.$store.dispatch(FETCH_CART_ITMES)
    }
}
</script>

<style scoped>
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
</style>