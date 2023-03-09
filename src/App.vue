<template>
  <div class="flex flex-col justify-between min-h-screen w-screen bg-[#161616]">
    <NavigationBar/>
    <main class="flex-grow">
      <div class="flex flex-col gap-12 justify-start items-center">
        <PageHero/>
        <CompanyList/>

        <div class="container bg-white bg-opacity-[3%] p-6 rounded-lg">
          <div class="grid grid-cols-4 text-white">
            <div class="col-span-1">
              <h3>Über mich</h3>
            </div>
            <div class="col-span-3">
              <p>Hey, ich bin Gökhan, 20 Jahre alt und komme aus Euskirchen, Deutschland. Ich bin seit 5 Jahren
                leidenschaftlicher Software-Entwickler und spezialisiert auf Web-Anwendungen und
                Server-Side-Applications. Ich liebe es, neue Technologien und Frameworks zu entdecken und bin immer
                offen für Neues. Ich freue mich auf zukünftige Projekte und Herausforderungen als Entwickler.</p>
            </div>
          </div>
        </div>


        <!--
        <div v-for="skill in skills">
          <SkillScale :skill="skill"/>
        </div>
        -->

      </div>
    </main>
    <PageFooter/>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "./components/PageNavigation.vue"
import PageFooter from "./components/PageFooter.vue"
import PageHero from "./components/PageHero.vue"
import CompanyList from "./components/CompanyList.vue"
import {Skill} from "./models/skill.js"

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
