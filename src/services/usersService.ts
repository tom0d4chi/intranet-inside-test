import {User} from "../types.ts";

const apiUrl = import.meta.env.VITE_API_URL;

export async function fetchAllUsers() {
    try{
        const response = await fetch(`${apiUrl}/users`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export async function addUser(user: User) {
    try{
        await fetch(`${apiUrl}/users`, {
            method: 'POST',
            body: JSON.stringify(user),
        });
    } catch (error) {
        console.error('Error uploading user:', error);
        throw error;
    }
}

export async function deleteUser(id: string) {
    try {
        await fetch(`${apiUrl}/users/${id}`);
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}