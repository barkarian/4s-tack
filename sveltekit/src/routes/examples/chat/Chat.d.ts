export type ChatInfos = {
    chatName: string,
    id: string,
    avatar?: string,
    members?: any[]
}

export type ChatUser = {
    username: string,
    id: string,
    avatar?: string,
    firstName?: string,
    lastName?: string
}

export type ChatMessage = {
    username: string,
    userId: string,
    content: string,
    avatar?: string,
    firstName?: string,
    lastName?: string
}