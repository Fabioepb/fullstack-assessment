import type { AppType } from 'next/app'
import { trpc } from '../utils/trpc'
import '../styles/globals.css'
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default trpc.withTRPC(MyApp)
