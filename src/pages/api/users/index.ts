import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { fetchUserData } from '../../../service/Users'
const prisma = new PrismaClient()

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const userData = req.body

    const userBalance = await fetchUserData(userData.id)

    const userObj = await prisma.user.findUnique({ where: { id: userData.id } })

    if (userObj) {
      return res.send({
        message: 'User already exists in the database',
        status: 402
      })
    } else {
      const user = await prisma.user.create({
        data: {
          balance: userBalance.data.balance,
          id: userData.id,
          name: userData.name
        }
      })

      return res.send({
        message: 'User was created',
        status: 200,
        user
      })
    }
  }
}
