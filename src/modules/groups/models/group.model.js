const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }]
});

GroupSchema.pre("save", function(next) {
    if(this.isNew) {
        if(this.users.length >= 2) {
            next();
        } else {
            throw new Error("Você deve cadastrar pelo menos dois usuários no grupo");
        }
    } else {
        next();
    }
    
  });

// function arrayLimit(val) {
//     return val.length >= 2;
// }

module.exports = mongoose.model("Group", GroupSchema);