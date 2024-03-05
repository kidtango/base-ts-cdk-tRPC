import { initTRPC } from "@trpc/server"
import { OpenApiMeta } from "trpc-openapi"

export type Context = {
  request: {
    ip: string;
    ua: string;
  }
}

const trpcInstance = initTRPC.context<Context>().meta<OpenApiMeta>().create({
  isDev: process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test',
})

export type TrpcInstance = typeof trpcInstance;

export const appRouter = trpcInstance.router({
  // routes go here
})

export type AppRouter = typeof appRouter;