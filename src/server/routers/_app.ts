import { z } from 'zod'
import { procedure, router } from '../trpc'
import Axios from '../../utils/axios'

export const appRouter = router({
  getUser: procedure
    .input(
      z.object({
        id: z.string()
      })
    )
    .output(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        balance: z.number()
      })
    )
    .query(async ({ input, ctx }) => {
      const res = await Axios.get(
        `https://assessment-server-production.up.railway.app/api/trpc/user.getUser?id=${input.id}&key=fabiopineda97@gmail.com`
      )

      const user = await ctx.prisma.user.findUnique({
        where: {
          id: input.id
        }
      })

      if (!user) {
      }
      return {
        id: input.id,
        name: undefined,
        balance: 0
      }
    }),

  setGlobalName: procedure
    .input(
      z.object({
        id: z.string(),
        name: z.string()
      })
    )
    .output(z.void())
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.update({
        where: { id: input.id },
        data: { name: input.name }
      })

      //update state
    })
})

// export type definition of API
export type AppRouter = typeof appRouter
