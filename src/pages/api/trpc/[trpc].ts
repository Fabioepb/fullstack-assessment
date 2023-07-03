import * as trpcNext from '@trpc/server/adapters/next'
import { appRouter } from '../../../server/routers/_app'
import { PrismaClient } from '@prisma/client'

export const createContext = async (
  opts: trpcNext.CreateNextContextOptions
) => {
  const prisma = new PrismaClient()

  return {
    prisma
  }
}

// export API handler
// @see https://trpc.io/docs/server/adapters
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  responseMeta({ ctx, errors }) {
    if (errors.length) {
      return {
        status: 500
      }
    }
    const CACHE_TIME = 30
    return {
      headers: {
        'cache-control': `s-maxage=1, stale-while-revalidate=${CACHE_TIME}`
      }
    }
  }
})
