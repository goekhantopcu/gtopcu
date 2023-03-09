<template>
  <header>
    <div class="flex justify-between items-center px-12 py-6">
      <div class="flex justify-center items-center gap-3">
        <div class="bg-[#454545] flex items-center justify-center rounded-full h-[2.5rem] w-[2.5rem]">
          <font-awesome-icon icon="fa-solid fa-envelope" class="text-white" />
        </div>
        <span class="text-white">kontakt@gtopcu.de</span>
      </div>
      <div class="flex justify-center items-center gap-6">
        <a class="text-white">LinkedIn</a>
        <a class="text-white">GitHub</a>
        <a class="text-white">Instagram</a>
      </div>
    </div>
  </header>
</template>

<script setup>
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
