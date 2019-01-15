const mongoose = require("mongoose");
const User = require("../models/user.model");

exports.getAllUsers = async function (req, res) {
    try {
        const userDoc = await User.find();
        return res.json(userDoc);
    } catch (err) {
        console.log(err);
    }
}

exports.createUser = async function (req, res) {
    try {
        const user = new User(req.body);

        const userDoc = await user.save();
        return res.json(userDoc);

    } catch (err) {
        console.log(err);
    }
}

exports.getUser = async function (req, res) {
    try {
        const user = await User.findById(req.params.userId);

        return res.json(user);
    } catch (err) {
        console.log(err);
    }
}

exports.updateUser = async function (req, res) {
    try {

        const userDoc = await User.findByIdAndUpdate(
            req.params.userId,
            req.body
        );

        return res.json(userDoc);

    } catch (err) {
        console.log(err);
    }
}

exports.deleteUser = async function (req, res) {
    try {
        const userDoc = await User.findByIdAndRemove(req.params.userId);

        return res.json(userDoc);
    } catch (err) {
        console.log(err);
    }
}

exports.listUserGroups = async function (req, res) {
    try {
        const user = await User.findById(req.params.userId)
            .populate("groups", "name");

        const { groups } = user;

        return res.json(groups);
    } catch (err) {
        console.log(err);
    }
}