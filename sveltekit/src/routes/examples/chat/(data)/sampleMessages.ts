import type { ChatMessageType } from "$lib/components/ui-custom/chat/Chat";

const aliceUserId = "user-001"; // Sample user ID for Alice
const bobUserId = "user-002";   // Sample user ID for Bob

export let sampleMessages: ChatMessageType[] = [
    { content: 'Hi there!', username: 'Alice', userId: aliceUserId },
    { content: 'Hello! How are you?', username: 'Bob', userId: bobUserId },
    { content: 'I’m good, thanks for asking!', username: 'Alice', userId: aliceUserId },
    { content: 'Glad to hear that. Working on anything exciting?', username: 'Bob', userId: bobUserId },
    { content: 'Yes, I’m currently working on a new web design project.', username: 'Alice', userId: aliceUserId },
];