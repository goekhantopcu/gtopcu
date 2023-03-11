<template>
<div class="d-flex justify-center items-center relative hover:justify-between">
  <div class="skill" style="--i: 1">

  </div>
  <div class="skill" style="--i: 2">

  </div>
  <div class="skill" style="--i: 3">

  </div>
</div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.skill {
  @apply absolute h-[3rem] w-[3rem] bg-green-400
    translate-x-[--i] -translate-y-[--i] rotate-12
    hover:translate-y-0 hover:translate-x-1/2 hover:rotate-0
    duration-500 ease-in-out
}
.skill:hover {

}
</style>
