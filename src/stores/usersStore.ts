import { defineStore } from 'pinia'
import { ref } from 'vue'
import {User} from "../types.ts";

export const useUsersStore = defineStore('users', () => {
    const users = ref<User[]>([])
    return { users }
})