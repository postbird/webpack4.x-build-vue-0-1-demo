<template>
  <div class="wrapper">
    <ul>
      <li><router-link to="/index">Index</router-link></li>
      <li><router-link to="/hello">Hello</router-link></li>
      <li><router-link to="/list">List</router-link></li>
    </ul>
    <router-view></router-view>
  </div>  
</template>

<script>
  import Vue from 'vue';
  import VueRouter from 'vue-router';
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
  }
</style>
