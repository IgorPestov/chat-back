import express from "express";
import { IUser } from "../interface/IUser";
import userModel from "../models/User";

exports.signup = (req: express.Request, res: express.Response) => {
  const { email, password, firstName } = req.body;
  const postData: { email: string; password: string; firstName: string } = {
    email,
    password,
    firstName,
  };
  const user = new userModel(postData);
  user
    .save()
    .then((obj: IUser) => {
      // res.json(obj);
      res.send('work')
    })
    .catch((reason: any) => {
      res.status(500).json({
        status: "error",
        message: reason,
      });
    });
};
exports.signin = async (req : express.Request , res:express.Response)  => {
      const {email, password} = req.body
      const user = await userModel.findOne({ email, password})
      if(!user) {
        res.status(400).json({
          message: 'Invalide email or password'
        })
      }
      res.send(user)
}
