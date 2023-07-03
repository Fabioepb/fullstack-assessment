// import { UserData } from '@/pages'
import { UserData } from '@/utils/types'
import Axios from '../utils/axios'

export const fetchUserData = async (id: string) => {
  return Axios.get(
    `https://assessment-server-production.up.railway.app/api/trpc/user.getUser?id=${id}&key=fabiopineda97@gmail.com`
  )
}

export const fetchSubmitUser = async (userData: UserData) => {
  return Axios.post('/api/users', userData)
}

export const fetchDeleteUser = async (id: string) => {
  return Axios.delete('/api/users?id=${}')
}

// const useUserData = () => {
//   const data = useQuery()
//   return data
// }
