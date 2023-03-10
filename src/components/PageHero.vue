<template>
  <div class="flex flex-col flex-grow justify-start items-center">
    <img src="../assets/navicon.png" alt="Profile Picture" class="rounded-full h-[9rem] w-[9rem]"/>
    <h3 class="text-[2rem] title-text-color">Software-Entwickler</h3>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.title-text-color {
  @apply bg-clip-text bg-gradient-to-r from-white to-gray-500 font-bold uppercase text-transparent
}
</style>
