import { ApolloServer } from "@apollo/server";
import { startServerAndCreateCloudflareWorkersHandler } from "@as-integrations/cloudflare-workers";
import typeDefs from "./src/schema";
import Resolvers from "./src/resolvers";

interface Context {
	Authorized: boolean;
}

const server = new ApolloServer<Context>({
	typeDefs,
	resolvers: Resolvers,
});

const tokens = ["secret"];

export interface Env {}

export default {
	fetch: startServerAndCreateCloudflareWorkersHandler<Env, Context>(server, {
		context: async ({ request }) => {
			let token = request.headers.get("Authorization") || "";
			if (!token) return { Authorized: false };
			else {
				if (tokens.includes(token)) return { Authorized: true };
				else return { Authorized: false };
			}
		},
	}),
};
