<template>
  <div class="companies-grid">
    <Company :company="company" v-for="(company, index) in companies" :key="index"/>
  </div>
</template>

<script setup lang="ts">
import Company from "./Company.vue";
import useCompanyStore from "../stores/company-store";
import {storeToRefs} from "pinia";

const companyStore = useCompanyStore()
const {companies} = storeToRefs(companyStore)
</script>

<style>
.companies-grid {
  @apply grid grid-cols-1 grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 w-full gap-3
}
</style>
