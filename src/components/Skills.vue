<template>
  <div class="flex flex-col justify-center items-center gap-3">
    <h1 class="text-white text-[2rem] font-bold">Skills</h1>
    <div class="flex flex-col sm:grid sm:grid-cols-3 gap-3">
      <Skill v-for="skill in skills" :key="skill.title" :skill="skill" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {SkillModel} from "../models/skill-model";
import Skill from "./Skill.vue";

const skills: SkillModel[] = [
  new SkillModel("fa-code", "Web & Mobile Apps", "Umsetzung von modernen und responsiven Web- sowie Mobilen Applikationen"),
  new SkillModel("fa-house-laptop", "SmartHome Assistent", "Transformierung des Eigenheims zu einer angenehmeren smarten Umgebung"),
  new SkillModel("fa-car", "Modern Cars", "Entwicklung von hochmodernen Autoradios"),
]
</script>

<style scoped>

</style>
