<template>
  <div class="flex flex-col items-center mb-9">
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
  @apply bg-clip-text bg-gradient-to-r from-930-100 to-930-300
  text-transparent text-xl sm:text-3xl font-bold uppercase select-none
}
</style>
