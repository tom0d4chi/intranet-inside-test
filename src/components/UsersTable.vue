<script setup lang="ts">
import UserTableRow from "./UserTableRow.vue";
import {useUsersStore} from "../stores/usersStore.ts";
import {computed, ref} from "vue";
import {User} from "../types.ts";

const store = useUsersStore();

const sortUsersByAscendingOrder = (a:User,b: User) => a.name.localeCompare(b.name);
const sortUsersByDescendingOrder = (a:User,b: User) => b.name.localeCompare(a.name);

const filterFunction = ref(sortUsersByAscendingOrder)

const invertOrder = () => {
  filterFunction.value = filterFunction.value == sortUsersByAscendingOrder ? sortUsersByDescendingOrder : sortUsersByAscendingOrder;
}

const sortedUsers = computed(() => {
  return [...store.users].sort(filterFunction.value);
})




</script>

<template>
  <table>
    <thead>
    <tr>
      <th></th>
      <th @click="invertOrder">NOM</th>
      <th>MÉTIER</th>
      <th>EMAIL</th>
      <th>TELEPHONE</th>
      <th></th>
    </tr>
    </thead>
    <tbody>
      <UserTableRow v-for="user in sortedUsers" :user="user" :key="user.id" />
    </tbody>
  </table>
</template>

<style scoped>

</style>