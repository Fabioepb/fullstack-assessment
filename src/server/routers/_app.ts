import { z } from "zod";
import { procedure, router } from "../trpc";

export const appRouter = router({
  getUser: procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .output(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        balance: z.number(),
      })
    )
    .query(({ input, ctx }) => {
      // TODO: implement logic
      return {
        id: input.id,
        name: undefined,
        balance: 0,
      };
    }),

  setGlobalName: procedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
      })
    )
    .output(z.void())
    .mutation(({ input, ctx }) => {
      // TODO: implement logic
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
