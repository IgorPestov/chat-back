import express from "express";
import { IUser } from "../interface/IUser";
import userModel from "../models/User";
import jwt from 'jsonwebtoken'

exports.signup = (req: express.Request, res: express.Response) => {
  const { email, password, fullname } = req.body;
  const postData: { email: string; password: string; fullname: string } = {
    email,
    password,
    fullname,
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
exports.signin = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body
  let user: IUser | null;

  user = await userModel.findOne({ email, password })
  if (!user) {
    res.status(400).json({
      message: 'Invalide email or password'
    })
  }
  const token = jwt.sign({
    userId: user?._id,
    fullname: user?.fullname,
  }, '1231313')
  res.send(token)
}
