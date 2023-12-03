import type { ChatInfos, ChatUser } from "../chat/(components)/Chat";
import type { PageServerLoad } from "./$types";
import { sampleMessages } from "../chat/(data)/sampleMessages";
let currentUser: ChatUser = {
    id: 'user-002',
    username: 'Bob'
};
let chatInfos: ChatInfos = {
    chatName: 'Alice',
    id: 'user-001'
};
let messages = sampleMessages;

export const load: PageServerLoad = () => {
    return {
        messages: sampleMessages,
        currentUser,
        chatInfos
    };
};