<template>
  <div class="flex flex-col justify-between h-screen w-screen">
    <NavigationBar/>
    <main class="flex-grow">
      <div class="flex flex-col gap-12 justify-start items-center">
        <PageHero/>
        <CompanyList/>
        <SelfDescription/>
      </div>
    </main>
    <PageFooter/>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "./components/layout/PageNavigation.vue"
import PageFooter from "./components/layout/PageFooter.vue"
import PageHero from "./components/layout/PageHero.vue"
import CompanyList from "./components/CompanyList.vue"
import {Skill} from "./models/skill.js"
import SelfDescription from "./components/SelfDescription.vue";

const skills: Skill[] = [
  {
    title: 'Java',
    percentage: 95
  },
  {
    title: 'Kotlin',
    percentage: 80
  },
  {
    title: 'Typescript',
    percentage: 75
  },
  {
    title: 'Javascript',
    percentage: 75
  },
  {
    title: 'VueJS',
    percentage: 75
  },
  {
    title: 'Angular',
    percentage: 85
  }
]

</script>

<style scoped>

</style>
