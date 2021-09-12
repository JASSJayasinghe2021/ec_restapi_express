const dayjs = require('dayjs');
require('dotenv').config();
const db = require('../models');
const User = db.user;
const UserSystems = db.userSystems;
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const { QueryTypes } = require('sequelize');
const sequelize = db.sequelize;
const bcrypt = require('bcrypt');
const crypto = require("crypto");
const { Console } = require('console');
const { env } = require('process');

const generateAccessToeken = (uid) => {
    const accessToken = jwt.sign({ id: uid }, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.JWT_ACCESS_TIME });
    return accessToken;
}

const generateAppAccessToeken = (uid) => {
    const accessToken = jwt.sign({ id: uid }, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.JWT_APP_ACCESS_TIME });
    return accessToken;
}

exports.signIn = async (req, res) => {
    const username = 'jass';
    const password = '123';
    //create jwt token
    const at=generateAccessToeken(1);
    //create httponly token
    res.cookie("emp_mod_token", at, {
        httpOnly: true,
        expires: dayjs().add(30, "days").toDate(),
        secure: process.env.NODE_ENV === 'PRODUCTION' ? true : false
    });
    res.status(200).send({
        user_name: 'Jass',
    });
    
}

exports.appsSignIn = async (req, res) => {
    const appcode = req.body.appcode;
}