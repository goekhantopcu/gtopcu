<template>
  <div>
    <div class="text-lg font-medium text-white w-screen">{{ props.skill.title }}</div>
    <div class="w-full h-6 bg-white bg-opacity-[6%] rounded-full">
      <div class="h-6 bg-white rounded-full" :style="{'width': props.skill.percentage + '%'}"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Skill} from "../models/skill";

const props = defineProps<{
  skill: Skill
}>()
</script>

<style scoped>
</style>
