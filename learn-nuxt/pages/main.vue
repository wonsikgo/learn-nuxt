<template>
  <div>
    <p>메인페이지 입니다.</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async created() {
    const response = await axios.get('http://localhost:3000/products')
    console.log(response)
  },
}
</script>

<style></style>
