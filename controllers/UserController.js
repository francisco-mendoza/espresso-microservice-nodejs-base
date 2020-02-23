var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require('../models/User');

const controller = {};

// CREATES A NEW USER
controller.addUser = async (req, res) => {
    let user = User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    });

    try {
        const savedUser = await User.addUser(user);
        res.status(200).send(savedUser);
    } catch (error) {
        logger.error('Error - ' + err);
        res.status(500).send("Error save user");
    }
}

// RETURNS ALL THE USERS IN THE DATABASE
controller.getUsers = async (req, res) => {
    try {
        const users = await User.getAll();
        res.status(200).send(users);
    } catch (error) {
        logger.error('Error - ' + err);
        res.status(500).send("Error get Users");
    }
}

// GETS A SINGLE USER FROM THE DATABASE
controller.getUserById = async (req, res) => {
    try {
        const user = await User.detailUser(req.params.id);
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    } catch (error) {
        logger.error('Error - ' + err);
        res.status(500).send("Error update user");
    }   
}

// DELETES A USER FROM THE DATABASE
controller.deleteUserById = async (req, res) => {
    try {
        await User.removeUser(req.params.id);
        res.status(200).send("Deleted user successfully");
    } catch (error) {
        logger.error('Error - ', error);
        res.status(500).send("Error delete user");
    }
}

// UPDATES A SINGLE USER IN THE DATABASE
controller.putUserById = async (req, res) => {
    try {
        User.updateUser(req.params.id, req.body);
        res.status(200).send("Updated user successfully");
    } catch (error) {
        res.status(500).send("Error update user");
    }
}

module.exports = controller;