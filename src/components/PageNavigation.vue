<template>
  <header class="bg-transparent flex justify-between items-center px-6 sm:px-12 py-6 w-full">
    <a href="mailto:kontakt@goekhantopcu.de" class="nav-item" title="E-Mail">
      <font-awesome-icon icon="fa-solid fa-envelope" />
    </a>
    <div class="flex justify-between items-center gap-3 sm:gap-6">
      <a href="https://www.linkedin.com/in/goekhantopcu" target="_blank" class="nav-item" title="LinkedIn">
        <font-awesome-icon icon="fa-brands fa-linkedin-in" />
      </a>
      <a href="https://github.com/goekhantopcu" target="_blank" class="nav-item" title="GitHub">
        <font-awesome-icon icon="fa-brands fa-github" />
      </a>
      <a href="https://www.instagram.com/goekhantopcu" target="_blank" class="nav-item" title="Instagram">
        <font-awesome-icon icon="fa-brands fa-instagram" />
      </a>
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
.nav-item {
  @apply bg-[#454545] flex items-center justify-center rounded-xl h-[2.5rem] w-[2.5rem]
  text-white
  transition ease-in-out duration-500 hover:scale-110 hover:text-[#FD8952]
}
</style>
