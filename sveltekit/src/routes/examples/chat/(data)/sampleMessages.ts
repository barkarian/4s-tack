import type { ChatMessage } from '../(components)/Chat';

const aliceUserId = "user-001"; // Sample user ID for Alice
const bobUserId = "user-002";   // Sample user ID for Bob

export let sampleMessages: ChatMessage[] = [
    { content: 'Hi there!', username: 'Alice', firstName: 'Alice', lastName: 'Smith', userId: aliceUserId },
    { content: 'Hello! How are you?', username: 'Bob', firstName: 'Bob', lastName: 'Johnson', userId: bobUserId },
    { content: 'I’m good, thanks for asking!', username: 'Alice', firstName: 'Alice', lastName: 'Smith', userId: aliceUserId },
    { content: 'Glad to hear that. Working on anything exciting?', username: 'Bob', firstName: 'Bob', lastName: 'Johnson', userId: bobUserId },
    { content: 'Yes, I’m currently working on a new web design project.', username: 'Alice', firstName: 'Alice', lastName: 'Smith', userId: aliceUserId },
];