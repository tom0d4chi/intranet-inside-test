<script setup lang="ts">
import {User} from "../types.ts";
import trash from '../assets/trash.svg';
import {deleteUser} from "../services/usersService.ts";
import {useUsersStore} from "../stores/usersStore.ts";

const store = useUsersStore();

defineProps<{
  user: User;
}>()

const handleDelete = async (userId: string) => {
  store.users = store.users.filter(user => user.id !== userId)
  await deleteUser(userId);
}

</script>

<template>
  <tr>
    <td>
    </td>
    <td>{{user.name}}</td>
    <td>{{user.job}}</td>
    <td>{{user.email}}</td>
    <td>{{user.phone}}</td>
    <td><img @click="handleDelete(user.id)" :src=trash height="40" alt=""></td>
  </tr>
</template>

<style scoped>

</style>