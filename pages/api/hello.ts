// nextjs api example hello world

import { NextApiRequest, NextApiResponse } from "next/types"

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ text: 'Hello' })
    }