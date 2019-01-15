<template>
  <div class="wrapper">
    <h1>{{title}}</h1>
  </div>  
</template>

<script>
  export default {
    data() {
      return {
        'title': 'Hello World!'
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: #ffffff;
  }
  .wrapper {
    display: grid;
    transition: all .5s;
    user-select: none;
    background: linear-gradient(to right, #ff5000, #cc735f);
  }
</style>
