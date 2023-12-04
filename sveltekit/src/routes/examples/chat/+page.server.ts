import type { ChatConfig, ChatInfos, ChatUser } from "./(components)/Chat";
import type { PageServerLoad } from "./$types";
import { sampleMessages } from "./(data)/sampleMessages";
let chatConfig: ChatConfig = {
    currentUser: {
        id: 'user-002',
        username: 'Bob'
    },
    chatInfos: {
        chatName: 'Alice',
        id: 'user-001',
    },
    messages: sampleMessages
}



export const load: PageServerLoad = () => {
    return chatConfig
};