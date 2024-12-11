<script setup lang="ts">
import UserTableRow from "./UserTableRow.vue";
import {useUsersStore} from "../stores/usersStore.ts";
import {computed, ref} from "vue";
import arrow from "../assets/arrow.svg"
import {User} from "../types.ts";

const store = useUsersStore();

const sortUsersByAscendingOrder = (a:User,b: User) => a.name.localeCompare(b.name);
const sortUsersByDescendingOrder = (a:User,b: User) => b.name.localeCompare(a.name);

const filterFunction = ref(sortUsersByAscendingOrder)

const isArrowReversed = ref(false);

const invertOrder = () => {
  filterFunction.value = filterFunction.value == sortUsersByAscendingOrder ? sortUsersByDescendingOrder : sortUsersByAscendingOrder;
  isArrowReversed.value = !isArrowReversed.value;
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
      <th id="name-head" @click="invertOrder">NOM
        <img :class="{reversed: isArrowReversed}" id="arrow" :src=arrow alt="" height="16">
      </th>
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
table{
  width: 100%;
}

th{
  font-weight: 400;
  text-align: left;
  user-select: none;
}

#name-head {
  cursor: pointer;
}

#arrow {
  transition: rotate 200ms ease-in-out;
  vertical-align: middle;
}

.reversed{
  rotate: 180deg
}
</style>