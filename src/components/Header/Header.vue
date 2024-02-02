<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <header class="py-2 bg-slate-800">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-3xl font-mono first-letter:text-error font-semibold">
            Vue.js
          </p>
        </div>
        <div>
          <ul class="flex items-center gap-2">
            <li>
              <RouterLink class="py-4 px-6" to="/">Home</RouterLink>
            </li>
            <li>
              <RouterLink class="py-4 px-6" to="/about">About</RouterLink>
            </li>
            <li>
              <RouterLink class="py-4 px-6" to="/blog">Blog</RouterLink>
            </li>
            <li>
              <RouterLink class="py-4 px-6" to="contact">Contact Us</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
.router-link-active {
  background: rgba(255, 99, 71, 0.295);
}
</style>
