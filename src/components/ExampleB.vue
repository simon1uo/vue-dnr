<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function handleClick() {
  count.value++
}
</script>

<template>
  <div @click="handleClick">
    {{ count }}
  </div>
</template>
