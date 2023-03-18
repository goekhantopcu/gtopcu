<template>
  <div class="flex flex-col justify-between h-screen w-screen">
    <NavigationBar/>
    <main class="flex-grow">
      <div class="flex flex-col gap-12 justify-start items-center">
        <PageHero/>
        <Companies />
        <Skills />
      </div>
    </main>
    <PageFooter/>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "./components/layout/PageNavigation.vue"
import PageFooter from "./components/layout/PageFooter.vue"
import PageHero from "./components/layout/PageHero.vue"
import Skills from "./components/Skills.vue";
import Companies from "./components/Companies.vue";
</script>

<style scoped></style>
