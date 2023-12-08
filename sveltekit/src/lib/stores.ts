import { writable, type Writable } from 'svelte/store';

// Initialize the store with a default value
export const userStore: Writable<UserStoreData | undefined> = writable(undefined);

export type UserStoreData = {
    username: string,
    email: string
}