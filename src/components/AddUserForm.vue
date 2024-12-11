<script setup lang="ts">
import { addUser } from "../services/usersService.ts";
import { ref } from "vue";
import { useUsersStore } from "../stores/usersStore.ts";

const store = useUsersStore();
const newUserName = ref('')
const isLoading = ref(false);

const handleSubmit = async () => {
  isLoading.value = true;
  const response = await addUser(newUserName.value)
  if (response.ok){
    const newUser = await response.json(); // Parse the response
    store.users.push(newUser)
    newUserName.value = '';
  }
  isLoading.value = false;
}
</script>

<template>
  <form id="add-user-form" @submit.prevent="handleSubmit" action="">
    <label for="add-user-input">Ajouter un utilisateur*</label>
    <input v-model="newUserName" id="add-user-input" placeholder="Nom" type="text">
    <button :class="{loading: isLoading}" type="submit">Valider<div v-if="isLoading" id="loader"/></button>
    <p>*Seul le champ name est nécessaire, le reste étant peuplé par l'API</p>
  </form>
</template>

<style lang="scss" scoped>
$primary: #BD9449;

#add-user-form {
  margin-top: 4rem;
  margin-bottom: 4rem;
  background-color: #F9F9F9;
  border: 1px dashed #AEB3B9;
  display: flex;
  gap: 4px;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 30px 60px 10px 30px;
  max-width: 900px;

  #loader {
    border: 2px solid #f3f3f3;
    border-top: 2px solid #211638;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    animation: spin 1.2s cubic-bezier(0.88, 0.39, 0.29, 0.71) infinite;
  }

  label{
    color: #273E52;
    font-weight: bold;
    font-size: 20px;
  }

  button{
    align-self: flex-end;
    border-radius: 6px;
    background: #211638;
    padding: 0.6em 2.2em;
    display: flex;
    gap: 8px;
    transition: all 200ms ease-out;

    &:hover {
      opacity: 0.8;
    }
  }

  .loading{
    opacity: 0.8
  }

  input{
    align-self: stretch;
    font-size: 16px;
    border-width: 0 0 1px 0;
    border-color: #959595;
    background: transparent;
    height: 30px;
    transition: all 200ms;
    padding: 0 0 4px 0;
    margin-top: 8px;
    margin-bottom: 12px;
  }

  input:focus{
    outline: none;
    border-color: $primary;
    color: $primary;

    &::placeholder {
      color: $primary;
      transition: all 200ms;
      opacity: 1;
    }
  }

  p{
    margin: 0;
    font-size: 10px;
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>