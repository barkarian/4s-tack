import type { ChatConfigType } from "../chat/(components)/chat/Chat";
import type { PageServerLoad } from "./$types";
let chatConfig: ChatConfigType = {
    currentUser: {
        id: 'user-002',
        username: 'Bob'
    },
    chatInfos: {
        chatName: 'Alice',
        id: 'user-001',
    },
    messages: []
}



export const load: PageServerLoad = () => {
    return chatConfig
};