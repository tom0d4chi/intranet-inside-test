<script setup lang="ts">
import {addUser} from "../services/usersService.ts";
import { ref } from "vue";
import { useUsersStore } from "../stores/usersStore.ts";

const store = useUsersStore();
const newUserName = ref('')

const handleSubmit = async () => {
  const response = await addUser(newUserName.value)
  if (response.ok){
    const newUser = await response.json(); // Parse the response
    store.users.push(newUser)
    newUserName.value = '';
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" action="">
    <label for="add-user">Ajouter un utilisateur*</label>
    <input v-model="newUserName" id="add-user" placeholder="Nom" type="text">
    <button type="submit">Valider</button>
  </form>
</template>

<style scoped>

</style>