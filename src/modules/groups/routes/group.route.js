const group = require("../controllers/group.controller");

module.exports = function(app) {

    app.route("/api/group")
        .get(group.getAllGroups)
        .post(group.createGroup);

    app.route("/api/group/:groupId")
        .get(group.getGroup)
        .put(group.updateGroup)
        .delete(group.deleteGroup);
    
    app.route("/api/group/:groupId/users")
        .get(group.listUsersFromGroup);

    app.route("/api/group/:groupId/user/:userId")
        .put(group.addUserToGroup)
        .delete(group.deleteUserFromGroup);
}