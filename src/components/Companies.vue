<template>
  <div class="flex flex-col justify-center items-center gap-3">
    <h1 class="title">Companies</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-3 mx-12 md:mx-6">
      <Company v-for="company in companies" :key="company.name" :company="company" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Company from "./Company.vue";
import {CompanyModel} from "../models/company-model";

const companies: CompanyModel[] = [
  {
    name: 'ABC Media GmbH',
    job: 'Software Developer',
    image: 'griefergames.png',
    description: 'Implementierung von verteilten Systemen und Microservices mit Spring Boot',
    tags: ['Spring Boot', 'Java', 'Kotlin', 'Hazelcast IMDG', 'PostgreSQL', 'Docker', 'REST', 'Hibernate'],
    color: '#FF0000'
  },
  {
    name: 'Deutsche Telekom AG',
    job: 'Software Developer',
    image: 'telekom.png',
    description: 'Entwicklung von Automatisierungs-Tools für das Fixed Access Network',
    tags: ['NestJS', 'Angular', 'VueJS', 'TypeScript', 'Python', 'REST', 'TypeORM', 'AutoMapper'],
    color: '#E30075'
  },
  {
    name: 'EXXETA AG',
    job: 'Software Developer',
    image: 'exxeta.png',
    description: 'Erstellung einer Benutzeroberfläche zur Ladestandsverwaltung von E-Autos',
    tags: ['Java', 'Spring Boot', 'Docker', 'PostgreSQL', 'Angular', 'GraphQL', 'Apollo', 'TypeScript'],
    color: '#FFFFFF'
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
