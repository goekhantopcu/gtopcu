<template>
  <div class="grid grid-cols-6 bg-white bg-opacity-[3%] h-[9rem] min-w-full p-6">
    <div class="col-span-2 flex flex-col justify-center items-center" v-for="company in companies" :key="company.id">
      <a :href="company.url" target="_blank" :title="company.alt">
        <img :src="company.cover"
             class="object-cover h-[1.25rem] sm:h-[2.5rem] md:h-[3rem] lg:h-[3.5rem] hover:cursor-pointer grayscale hover:grayscale-0 ease-in-out duration-700 hover:origin-center hover:rotate-12 hover:scale-110"
             :title="company.alt"
             :alt="company.alt">
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const companies = [
  {
    id: 'griefergames',
    url: 'http://griefergames.net',
    cover: 'griefergames.png',
    alt: 'GrieferGames'
  },
  {
    id: 'telekom',
    url: 'http://telekom.de',
    cover: 'telekom.png',
    alt: 'Deutsche Telekom AG'
  },
  {
    id: 'exxeta',
    url: 'http://exxeta.com',
    cover: 'exxeta.png',
    alt: 'Exxeta AG'
  }
]
</script>

<style></style>
