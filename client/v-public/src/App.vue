<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
  <!--<img alt="Vue logo" class="logo" src="https://i.pinimg.com/236x/f1/5b/ce/f15bce15dcc548d8827da5ad7b4ff94b.jpg" width="25" height="25"/ >-->

    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/Categories">Categories</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>

</style>
