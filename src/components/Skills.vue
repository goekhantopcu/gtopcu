<template>
  <div class="flex flex-col justify-center items-center gap-3">
    <h1 class="title">Skills</h1>
    <div class="flex flex-col sm:grid sm:grid-cols-3 gap-5">
      <Skill v-for="skill in skills" :key="skill.title" :skill="skill"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {SkillModel} from "../models/skill-model";
import Skill from "./Skill.vue";

const skills: SkillModel[] = [
  {
    icon: "fa-code",
    title: "Web & Mobile Apps",
    description: "Umsetzung von modernen und responsiven Web- sowie Mobilen Applikationen"
  },
  {
    icon: "fa-house-laptop",
    title: "SmartHome Assistent",
    description: "Transformierung des Eigenheims zu einer angenehmeren smarten Umgebung"
  },
  {
    icon: "fa-car",
    title: "Modern Cars",
    description: "Entwicklung von hochmodernen Autoradios"
  }
]
</script>

<style scoped>
.title {
  @apply bg-clip-text bg-gradient-to-r from-white to-gray-500 text-transparent
  text-[1.5rem]
  font-bold uppercase
  select-none
}
</style>
