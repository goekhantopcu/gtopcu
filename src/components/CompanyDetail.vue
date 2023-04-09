<template>
  <div v-if="company" class="bg-white bg-opacity-10 py-3 px-6 rounded-lg w-full">
    <div class="flex justify-between items-start">

      <div class="flex items-center gap-3">
      <img :src="company.image" :alt="company.name" class="h-7" />
        <div class="flex flex-col">
          <h1 class="text-md text-930-100">{{ company.name }}</h1>
          <h1 class="text-xs text-930-200 font-bold">{{ company.job }}</h1>
        </div>
      </div>

      <div class="p-1.5 cursor-pointer" @click="companyStore.setCompany(undefined)">
        <font-awesome-icon icon="fa-regular fa-xmark-circle" class="fa-xl text-930-100" />
      </div>
    </div>

    <hr class="border-0 h-0.5 bg-930-200 my-2.5" />

    <div class="flex flex-wrap gap-3">
      <div v-for="(tag, index) in company.tags" :key="index" class="bg-930-300 text-930-100 rounded-full py-1 px-3">
        <span>{{ tag }}</span>
      </div>
    </div>

    <hr class="border-0 h-0.5 bg-930-200 my-2.5" />

    <div class="flex flex-wrap">
      <span class="text-930-100">{{ company.detailedDescription }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {storeToRefs} from "pinia";
import useCompanyStore from "../stores/company-store";

const companyStore = useCompanyStore()
const { company } = storeToRefs(companyStore)
</script>
