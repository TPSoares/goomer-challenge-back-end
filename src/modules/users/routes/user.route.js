const user = require("../controllers/user.controller");

module.exports = function(app) {

    app.route("/api/user")
        .get(user.getAllUsers)
        .post(user.createUser);

    app.route("/api/user/:userId")
        .get(user.getUser)
        .put(user.updateUser)
        .delete(user.deleteUser);

    app.route("/api/user/:userId/groups")
        .get(user.listUserGroups);
}