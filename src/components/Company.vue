<template>
  <div class="company" :title="company.name">
    <div class="flex justify-start items-center gap-2">
      <img :src="company.image" :alt="company.name" class="h-[1.6rem]">
      <div class="flex flex-col">
        <h6 class="text-sm font-bold">{{ company.name }}</h6>
        <h6 class="text-xs">{{ company.job }}</h6>
      </div>
    </div>
    <span class="text-[0.75rem]">{{ company.description }}</span>
  </div>
</template>

<script setup lang="ts">
import {CompanyModel} from "../models/company-model";

const properties = defineProps<{
  company: CompanyModel
}>()
</script>

<style scoped>
.company {
  @apply flex flex-col justify-between items-start gap-3
  bg-white bg-opacity-[3%]
  rounded-lg
  text-white select-none
  transition ease-in-out duration-500
  hover:scale-105
  p-6
  h-full w-full
}
</style>
