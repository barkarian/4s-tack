import type { ChatMessage } from '../Chat';

const aliceUserId = "user-001"; // Sample user ID for Alice
const bobUserId = "user-002";   // Sample user ID for Bob

export let sampleMessages: ChatMessage[] = [
    { content: 'Hi there!', username: 'Alice', firstName: 'Alice', lastName: 'Smith', avatar: 'https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg', userId: aliceUserId },
    { content: 'Hello! How are you?', username: 'Bob', firstName: 'Bob', lastName: 'Johnson', avatar: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg', userId: bobUserId },
    { content: 'I’m good, thanks for asking!', username: 'Alice', firstName: 'Alice', lastName: 'Smith', avatar: 'https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg', userId: aliceUserId },
    { content: 'Glad to hear that. Working on anything exciting?', username: 'Bob', firstName: 'Bob', lastName: 'Johnson', avatar: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg', userId: bobUserId },
    { content: 'Yes, I’m currently working on a new web design project.', username: 'Alice', firstName: 'Alice', lastName: 'Smith', avatar: 'https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg', userId: aliceUserId },
];