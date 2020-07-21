import express from "express";
import { IUser } from "../interface/IUser";
import userModel from "../models/User";

exports.signup = (req: express.Request, res: express.Response): void => {
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
exports.signin = (req: express.Request, res: express.Response): void => {
    
  const postData: { email: string, password: string } = {
    email: req.body.email,
    password: req.body.password,
  };

  userModel.findOne({ email : postData.email }, (err, user: IUser) => {
    if (err || !user) {
      res.status(404).json({
        message: "User not found",
      });
    }
    if (postData.password === user.password) {
      res.json(user);
    } else {
      res.status(404).json({
        message: "Invalide email or password",
      });
    }
  });
};
