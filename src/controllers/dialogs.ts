import express from 'express'
import dialogModel from '../models/Dialog'


exports.getDialogFromUser = async (req: express.Request, res:express.Response) => {
    const {userId}:any = req.query
    const dialogs = await dialogModel.find({author: userId})
    console.log(dialogs)
  res.send(dialogs)
}