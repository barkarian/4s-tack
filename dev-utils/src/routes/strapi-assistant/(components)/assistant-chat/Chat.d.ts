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
export type ChatInfosType = {
    chatName: string,
    id: string,
    chatUsers?: ChatUser[]
    meta?: MetaChatInfos
}

export type ChatUserType = {
    currentUser: any;
    username: string,
    id: string,
    status?: "active" | "inactive"
    meta?: MetaChatUser
}

export type ChatMessageType = {
    username: string,
    userId: string,
    content: string,
    userIsActive?: "active" | "inactive"
    avatar?: string
}

export type ChatConfigType = {
    currentUser: ChatUser,
    chatInfos: ChatInfos,
    messages: ChatMessage[]
}