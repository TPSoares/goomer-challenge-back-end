const mongoose = require("mongoose");
const Group = require("../models/group.model");
const User = require("../../users/models/user.model");

exports.getAllGroups = async function (req, res) {
    try {
        const groupDoc = await Group.find();
        return res.json(groupDoc);
    } catch (err) {
        console.log(err);
    }
}

exports.createGroup = async function (req, res) {
    try {
        const group = new Group(req.body);

        //finds the user that was put on this group
       
        
        req.body.users.forEach(async user => {
            const userDoc = await User.findById(user); 

            if(!userDoc) {
                return res.status(404).send("No user with that name has been found!");
            }
    
            //saves this group in the user groups array
            userDoc.groups.push(group._id);
            await userDoc.save();
        });


    
        const groupDoc = await group.save();
        return res.json(groupDoc);

    } catch (err) {
        console.log(err);
    }
}

exports.getGroup = async function (req, res) {
    try {
        const group = await Group.findById(req.params.groupId);

        return res.json(group);
    } catch (err) {
        console.log(err);
    }
}

exports.updateGroup = async function (req, res) {
    try {

        const groupDoc = await Group.findByIdAndUpdate(
            req.params.groupId,
            req.body
        );

        return res.json(groupDoc);

    } catch (err) {
        console.log(err);
    }
}

exports.deleteGroup = async function (req, res) {
    try {
        const groupDoc = await Group.findByIdAndRemove(req.params.groupId);

        return res.json(groupDoc);
    } catch (err) {
        console.log(err);
    }
}

exports.addUserToGroup = async function (req, res) {
    try {
        const group = await Group.findById(req.params.groupId);

        if(!group) {
            return res.status(404).send("No group with that name has been found!");
        }

        const { users } = group;

        users.push(req.params.userId);

        //finds the user that was put on this group
        const userDoc = await User.findById(req.params.userId);

        if(!userDoc) {
            return res.status(404).send("No user with that name has been found!");
        }

        //saves this group in the user groups array
        userDoc.groups.push(group._id);
        await userDoc.save();
     
        const groupDoc = await group.save();

        return res.json(groupDoc);

    } catch (err) {
        console.log(err)
    }
}

exports.deleteUserFromGroup = async function (req, res) {
    try {
        const group = await Group.findById(req.params.groupId);

        if(!group) {
            return res.status(404).send("No group with that name has been found!");
        }

        const { users } = group;

        const userDoc = await User.findById(req.params.userId);

        if(!userDoc) {
            return res.status(404).send("No user with that name has been found!");
        }

        userDoc.groups.pull(req.params.groupId);

        await userDoc.save();

        if(users.length == 1) {
           try {
                const groupDoc = await Group.findByIdAndRemove(req.params.groupId);

                return res.json(groupDoc);
           } catch (err) {
               console.log(err)
           }
        }

        users.pull(req.params.userId);
        // console.log(users.length);

        const groupDoc = await group.save();

        return res.json(groupDoc);

    } catch (err) {
        console.log(err)
    }
}

exports.listUsersFromGroup = async function (req, res) {
    try {
        const group = await Group.findById(req.params.groupId)
            .populate("users");

        const { users } = group;

        return res.json(users);
    } catch (err) {
        console.log(err);
    }
}
