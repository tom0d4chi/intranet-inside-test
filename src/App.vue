<script setup lang="ts">
  import {onMounted} from "vue";
  import {useUsersStore} from "./stores/usersStore.ts";
  import {fetchAllUsers} from "./services/usersService.ts";
  import AddUserForm from "./components/AddUserForm.vue";
  import UsersTable from "./components/UsersTable.vue";
  const store = useUsersStore();

  onMounted(async () => {
    store.users = await fetchAllUsers();
    console.log(store.users)
  })
</script>

<template>
  <AddUserForm/>
  <UsersTable/>
</template>

<style scoped>

</style>
