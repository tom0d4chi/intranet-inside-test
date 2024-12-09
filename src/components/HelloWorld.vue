<script setup lang="ts">
import { ref } from 'vue'
import { onMounted } from 'vue'
import { fetchAllUsers, addUser } from "../services/usersService.ts";

onMounted(async () => {
  const users = await fetchAllUsers();
  await addUser({
    name: 'Anis',
    email: 'anis@gmail.com',
    job: 'Developer',
    phone: '0123456789',
  })

  console.log('users', users)
})

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
