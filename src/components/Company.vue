<template>
  <div class="company-card" @click="companyStore.setCompany(company)">
    <div class="company-card-header">
      <img :src="company.image" :alt="company.name" class="h-6" />
      <div class="flex flex-col justify-start items-start">
        <span class="company-name">{{ company.name }}</span>
        <span class="company-job">{{ company.job }}</span>
      </div>
    </div>
    <span class="company-description">{{ company.description }}</span>
  </div>
</template>

<script setup lang="ts">
import {CompanyModel} from "../models/company-model";
import useCompanyStore from "../stores/company-store";

const props = defineProps<{
  company: CompanyModel
}>()

const companyStore = useCompanyStore()
</script>

<style>
.company-card {
  @apply flex flex-col justify-start items-start gap-3
  py-3 px-4
  bg-white bg-opacity-10 rounded-lg
  min-h-full
  cursor-pointer
}

.company-name {
  @apply text-xs text-930-100
}

.company-job {
  @apply text-xs text-930-100 font-bold
}

.company-description {
  @apply text-xs text-930-100
}

.company-card-header {
  @apply flex flex-col md:flex-row gap-3 justify-center items-start md:items-center
}
</style>
