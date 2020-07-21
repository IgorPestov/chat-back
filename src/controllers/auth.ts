import express from "express";
import { IUser } from "../interface/IUser";
import userModel from "../models/User";

exports.signup = (req: express.Request, res: express.Response): void => {
    console.log('work')
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
      res.json(obj);
    })
    .catch((reason: any) => {
      res.status(500).json({
        status: "error",
        message: reason,
      });
    });
};
