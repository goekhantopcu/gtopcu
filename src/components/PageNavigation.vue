<template>
  <header>
    <div class="flex justify-between items-center px-12 py-6">
      <div class="flex justify-center items-center gap-3">
        <div class="bg-[#454545] flex items-center justify-center rounded-full h-[2.5rem] w-[2.5rem]">
          <font-awesome-icon icon="fa-solid fa-envelope" class="text-white" />
        </div>
        <a href="mailto:kontakt@goekhantopcu.de" class="text-white">kontakt@goekhantopcu.de</a>
      </div>
      <div class="flex justify-center items-center gap-6">
        <a href="https://www.linkedin.com/in/goekhantopcu" target="_blank" class="text-white">LinkedIn</a>
        <a href="https://github.com/goekhantopcu" target="_blank" class="text-white">GitHub</a>
        <a href="https://www.instagram.com/goekhantopcu" target="_blank" class="text-white">Instagram</a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const routes = [
  {
    name: 'Erfahrung',
    path: '#'
  },
  {
    name: 'Projekte',
    path: '#'
  },
  {
    name: 'Referenzen',
    path: '#'
  },
  {
    name: 'Kontakt',
    path: '#'
  }
]
</script>

<style scoped>

</style>
