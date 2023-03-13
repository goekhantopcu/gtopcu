<template>
  <div class="skill">
    <h1 class="skill-title">
      <font-awesome-icon :icon=" 'fa-solid ' + skill.icon" class="mr-1.5"/>
      {{ skill.title }}
    </h1>
    <span class="skill-description">{{ skill.description }}</span>
  </div>
</template>

<script setup lang="ts">
import {SkillModel} from "../models/skill-model";

const properties = defineProps<{
  skill: SkillModel
}>()
</script>

<style scoped>
.skill {
  @apply flex flex-col justify-between items-start
  bg-white bg-opacity-[3%]
  rounded-lg
  text-white hover:text-[#FD8952] select-none
  transition ease-in-out duration-500
  p-6
  h-[9rem] w-[18rem] sm:w-[14rem] lg:w-[18rem]
}
.skill-title {
  @apply text-[1rem] sm:text-[0.75rem] lg:text-[1rem]
}
.skill-description {
  @apply text-[0.75rem]
}
</style>
