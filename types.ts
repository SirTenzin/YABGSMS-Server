export type ContextType = {
    Authorized: boolean;
}

export type User = {
    id: number, username: string, fullName: string
}

export type Post = {
    id: number, author: number, title: string, content: PostContent
}

export type PostContent = {
    type: PostContentType,
    content: string
}

enum PostContentType {
    IMAGE = "IMAGE",
    TEXT = "TEXT"
}

export type CallbackFunction = (args: any[]) => any;