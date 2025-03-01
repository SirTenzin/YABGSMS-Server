import { users, posts, updateUsers, updatePosts } from "../data";
import { type ContextType } from "../../types"

const forbiddenError = new Error("403: Forbidden | You must be authorized to perform that action.")
const schemaError = new Error("400: Bad Request | You haven't properly formed your request.")
const duplicateError = new Error("400: Bad Request | Multiple resources were found at the cursor.")
const notFoundError = new Error("404: Not Found | The requested resource was not found at the given cursor.")

const Mutation = {

    createUser: async (_: any, { 
        username, 
        fullName 
    }: { username: string, fullName: string }, { Authorized }: ContextType) => {
        if(!Authorized) throw forbiddenError;
        if(!username || !fullName) return;
        else {
            let newID = Math.floor(Math.exp(Math.random()) * 9999)
            let newUser = {
                id: newID,
                username, fullName
            }
            users.push(newUser)
            return newUser;
        }  
    },

    deleteUser: async(_: any, { 
        id
    }: { id: number }, { Authorized }: ContextType) => {
        if(!Authorized) throw forbiddenError;
        if(!id) throw schemaError
        let user = users.filter(x => x.id === id)
        if(!user || user.length == 0) throw notFoundError;
        if(user.length > 1) throw duplicateError
        else {
            updateUsers((y: { id: number }[]) => {
                return y.filter(x => x.id != id)
            })
            return true;
        }
    },

    updateUserName: async(_: any, {
        id, username
    }: { id: number, username: string }, { Authorized }: ContextType) => {
        if(!Authorized) throw forbiddenError;
        if(!id || !username) throw schemaError;
        let user = users.filter(x => x.id === id)
        if(!user || user.length == 0) throw notFoundError;
        if(user.length > 1) throw duplicateError;
        else {
            updateUsers((y: { id: number, username: string, fullName: string }[]) => {
                return y.map(x => {
                    if(x.id === id) x.username = username;
                    return x;
                })
            })
            return users.filter(x => x.id === id)[0];
        }
    },

    updateUserFullName: async(_: any, {
        id, fullName
    }: { id: number, fullName: string }, { Authorized }: ContextType) => {
        if(!Authorized) throw forbiddenError;
        if(!id || !fullName) throw schemaError;
        let user = users.filter(x => x.id === id)
        if(!user || user.length == 0) throw notFoundError;
        if(user.length > 1) throw duplicateError;
        else {
            updateUsers((y: { id: number, username: string, fullName: string }[]) => {
                return y.map(x => {
                    if(x.id === id) x.fullName = fullName;
                    return x;
                })
            })
            return users.filter(x => x.id === id)[0];
        }
    },

    createPost: async(_: any, {
        author, title, contentType, content
    }: {
        author: number, title: string, contentType: string, content: string
    }, { Authorized }: ContextType) => {
        if(!Authorized) throw forbiddenError;
        if(!author || !title || !contentType || !content) throw schemaError;
        let newID = Math.floor(Math.exp(Math.random()) * 9999)
        let newPost = {
            id: newID,
            author, title, content: {
                type: contentType,
                data: content
            }
        }
        return newPost;
    },

    deletePost: async(_: any, {
        id
    }: { id: number }, { Authorized }: ContextType) => {
        if(!Authorized) throw forbiddenError;
        if(!id) throw schemaError;
        let post = posts.filter(x => x.id === id)
        if(!post || post.length == 0) throw notFoundError;
        if(post.length > 1) throw duplicateError;
        else {
            updatePosts((y: { id: number }[]) => {
                return y.filter(x => x.id != id)
            })
            return true;
        }
    },

    updatePostTitle: async(_: any, {
        id, title
    }: { id: number, title: string }, { Authorized }: ContextType) => {
        if(!Authorized) throw forbiddenError;
        if(!id || !title) throw schemaError;
        let post = posts.filter(x => x.id === id)
        if(!post || post.length == 0) throw notFoundError;
        if(post.length > 1) throw duplicateError;
        else {
            updatePosts((y: { id: number, author: number, title: string }[]) => {
                return y.map(x => {
                    if(x.id === id) {
                        x.title = title;
                    }
                    return x;
                })
            })
            return posts.filter(x => x.id === id)[0];
        }
    },

    updatePostContent: async(_: any, {
        id, contentType, content
    }: { id: number, contentType: string, content: string, title: string }, { Authorized }: ContextType) => {
        if(!Authorized) throw forbiddenError;
        if(!id || !contentType || !content) throw schemaError;
        let post = posts.filter(x => x.id === id)
        if(!post || post.length == 0) throw notFoundError;
        if(post.length > 1) throw duplicateError;
        else {
            updatePosts((y: { id: number, author: number, content: {
                type: string, data: string
            } }[]) => {
                return y.map(x => {
                    if(x.id === id) {
                        x.content.type = contentType;
                        x.content.data = content;
                    }
                    return x;
                })
            })
            return posts.filter(x => x.id === id)[0];
        }
    }
}

export default Mutation;