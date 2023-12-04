//Customizables
type MetaChatUser = {
    avatar?: string,
    firstName?: string,
    lastName?: string
}
type MetaChatInfos = {
    avatar?: string
}

//Standard in Component
export type ChatInfos = {
    chatName: string,
    id: string,
    chatUsers?: ChatUser[]
    meta?: MetaChatInfos
}

export type ChatUser = {
    username: string,
    id: string,
    meta?: MetaChatUser
}

export type ChatMessage = {
    username: string,
    userId: string,
    content: string,
    avatar?: string
}

export type ChatConfig = {
    currentUser: ChatUser,
    chatInfos: ChatInfos,
    messages: ChatMessage[]
}