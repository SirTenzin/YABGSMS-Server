import { type CallbackFunction } from '../types'

let users = [
	{
		id: 1,
		username: "amianthus",
		fullName: "Amian Thus",
	},
	{
		id: 2,
		username: "john1",
		fullName: "John Doe"
	}
];

const updateUsers = (x: CallbackFunction) => {
	users = x(users)
}

let posts = [
	{
		id: 1,
		author: 1,
		title: "The best social media app's first post!",
		content: {
			type: "TEXT",
			data: "This is the first post on this social media app. How amazing is this?",
		},
	},
	{
		id: 2,
		author: 1,
		title: "The best social media app's first image post!",
		content: {
			type: "TEXT",
			data: "This is the first post on this social media app with a picture. How amazing is this?",
		},
	},
];

const updatePosts = (x: CallbackFunction) => {
	posts = x(posts)
}

export {
    users, posts,
	updateUsers, updatePosts
}