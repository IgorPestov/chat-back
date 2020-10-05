import express, { Response } from 'express'
import userModel from '../models/User'


exports.addFriend = async (req: express.Request, res: express.Response) => {
    const { id, name } = req.body
    const { userId } = req.query
    try{
        const user = await userModel.findOneAndUpdate({ _id: userId , 'contacts.id': { $ne: id }}, {
            $push: {
                contacts: {
                    name,
                    id,
                }
            }
        },{returnOriginal: false } )
        if(user == null) {
          return res.json({ message: "TAKOI DRUG U TEBAY EST'"})
        }
        res.send(user)
    } catch (err){
    res.send(err)
    }
    
}
exports.userInfo = async (req: express.Request, res : Response) => {
    const {userId} = req.query
    const user = await userModel.findOne({_id: userId})
    res.send(user)
}