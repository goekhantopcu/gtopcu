<template>
  <div class="app-container">
    <TheNavigation/>
    <main class="app-main">
      <TheHero/>
      <Companies/>
      <CompanyDetail />
    </main>
    <TheFooter/>
  </div>
</template>

<script setup lang="ts">
import TheNavigation from "./components/TheNavigation.vue"
import TheFooter from "./components/TheFooter.vue"
import TheHero from "./components/TheHero.vue"
import Companies from "./components/Companies.vue";
import CompanyDetail from "./components/CompanyDetail.vue";
</script>

<style>
.app-container {
  @apply flex flex-col justify-between
  min-h-screen w-screen
  bg-930-400
  pt-6
  px-10 sm:px-6 md:px-6 lg:px-36 xl:px-64 2xl:px-96
}

.app-main {
  @apply flex-grow flex flex-col justify-start items-center gap-3 pt-6
}
</style>
