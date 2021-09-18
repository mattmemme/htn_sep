// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { connectToMongo } from "../../utils/mongo"

const ANALYTIC_COLLECTION_NAME = "customers"

export const getAllCustomers = async (mongo: any) => {
  return mongo
    .collection(ANALYTIC_COLLECTION_NAME)
    .find()
    .limit(100)
    .toArray() as Promise<any[]>
}

type Data = {
  customers: any[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { db: mongo } = await connectToMongo()

  const allCustomers = await getAllCustomers(mongo)

  res.status(200).json({ customers: allCustomers })
}
