<script setup lang="ts">
  import {onMounted} from "vue";
  import {useUsersStore} from "./stores/usersStore.ts";
  import {fetchAllUsers} from "./services/usersService.ts";
  import AddUserForm from "./components/AddUserForm.vue";
  import UsersTable from "./components/UsersTable.vue";
  import logo from "./assets/logo.png";
  const store = useUsersStore();

  onMounted(async () => {
    store.users = await fetchAllUsers();
  })
</script>

<template>
  <img :src="logo"  width=150 alt="">
  <AddUserForm/>
  <UsersTable/>
  <div id="bottom-bar"/>
</template>

<style scoped>
#bottom-bar {
  background-color: #BE9546;
  height: 12px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
