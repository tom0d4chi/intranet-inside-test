<script setup lang="ts">
import {User} from "../types.ts";

defineProps<{
  user: User;
}>()

</script>

<template>
  {{user.name}}
  <br/>
</template>

<style scoped>

</style>