import express from 'express'
import userModel from '../models/User'
import { IUser } from '../interface/IUser'


exports.addFriend = async (req: express.Request, res: express.Response) => {
    const {id,name} = req.body
    const { userId } = req.query

    const user = await userModel.findOneAndUpdate({ _id: userId }, {
        $push: {
            contacts: {
                name,
                id,
            }
        }

    })
   res.send(user)
}

