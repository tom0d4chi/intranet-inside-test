<script setup lang="ts">
import UserTableRow from "./UserTableRow.vue";
import {useUsersStore} from "../stores/usersStore.ts";
const store = useUsersStore();
</script>

<template>
  <table>
    <thead>
    <tr>
      <th></th>
      <th>NOM</th>
      <th>MÉTIER</th>
      <th>EMAIL</th>
      <th>TELEPHONE</th>
      <th></th>
    </tr>
    </thead>
    <tbody>
      <UserTableRow v-for="user in store.users" :user=user />
    </tbody>
  </table>
</template>

<style scoped>

</style>