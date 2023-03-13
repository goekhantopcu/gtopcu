<template>
  <div class="flex flex-col justify-between h-screen w-screen">
    <NavigationBar/>
    <main class="flex-grow">
      <div class="flex flex-col gap-12 justify-start items-center">
        <PageHero/>
        <CompanyList/>
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
import CompanyList from "./components/Companies.vue"
import Skills from "./components/Skills.vue";
</script>

<style scoped>

</style>
