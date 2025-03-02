# YABGSMS: Yet Another Basic GraphQl Social Media Server

Very simple very basic GraphQL Social Media Server just as my first ever GraphQL server.

## Server (/server)

The server directory is where the Bun Apollo Server is stored. The schema is in src/schema.ts and the placeholder data is in the src/data.ts folder. For now the data is simply static and has no backend database. It might but not right now, just focusing on the core GQL stuff. It is deployed onto Cloudflare Workers using the "@as-integrations/cloudflare-workers" plugin.

You can run it using `cd /server && bun start` or `bun dev` for hot reloading.

## Documentation (/docs)

You can visit the documentation for this app [here](https://yabgsms-docs.tgca211859.workers.dev/docs) and the code for the docs [here](https://github.com/sirtenzin/yabgsmsd).