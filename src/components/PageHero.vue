<template>
  <div class="flex flex-col items-center">
    <img src="../assets/navicon.png" title="Profile Picture" alt="Profile Picture" class="hero-image"/>
    <h3 class="hero-text">Software-Entwickler</h3>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.hero-image {
  @apply rounded-full h-[9rem] w-[9rem] select-none
}

.hero-text {
  @apply bg-clip-text bg-gradient-to-r from-white to-gray-500 text-transparent
  text-[1.5rem] sm:text-[2rem]
  font-bold uppercase
  select-none
}
</style>
