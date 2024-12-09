<script setup lang="ts">
import UserTableRow from "./UserTableRow.vue";
import {useUsersStore} from "../stores/usersStore.ts";
const store = useUsersStore();
</script>

<template>
  <UserTableRow v-for="user in store.users" :user=user />
</template>

<style scoped>

</style>