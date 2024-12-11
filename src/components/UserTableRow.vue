<script setup lang="ts">
import {User} from "../types.ts";
import trash from '../assets/trash.svg';
import defaultAvatar from '../assets/default-avatar.png'
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
    <td id="user-avatar">
<!--      <img :src="user.avatar" alt="avatar">  les images ne semblant plus être hébergées, j'ai utilisé l'avatar par défault à la place-->
      <img :src="defaultAvatar" alt="">
    </td>
    <td>{{user.name}}</td>
    <td>{{user.job}}</td>
    <td>{{user.email}}</td>
    <td>{{user.phone}}</td>
    <td><img id="delete-button" @click="handleDelete(user.id)" :src=trash height="20" alt="delete"></td>
  </tr>
</template>

<style scoped>
#delete-button{
  cursor: pointer;
}

td{
  text-align: left;
}

tr{
  height: 50px;
}

#user-avatar{

  img{
    vertical-align: middle;
    border-radius: 999px;
    max-width: 24px;
    max-height: 24px;
    background: #D6D6D6;
  }
}
</style>