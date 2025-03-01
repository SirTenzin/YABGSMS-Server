import type { ContextType } from "../../types";
import { users, posts } from "../data";

const Query = {
	users: () => users,
	posts: () => posts,
	post: (_: any, args: { id: number }, ctx: ContextType) => {
		if(ctx.Authorized) return posts.filter((x) => x.id == args.id)[0];
	},
	user: (_: any, args: { id: number }, ctx: ContextType) => {
		if(ctx.Authorized) return users.filter((x) => x.id == args.id)[0];
	},
};

export default Query;
