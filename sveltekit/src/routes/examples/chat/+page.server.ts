import type { ChatConfigType } from "$lib/components/ui-custom/chat/Chat";
import type { PageServerLoad } from "./$types";
import { sampleMessages } from "./(data)/sampleMessages";
let chatConfig: ChatConfigType = {
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