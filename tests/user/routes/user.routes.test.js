const request = require("supertest");
const app = require("../../../server").app;
const { User } = require("../../../src/modules/users/models/user.model");

describe("test /api/user", () => {
    
    beforeAll(function () {
        process.env.NODE_ENV = 'test';
    });
    it("should create a user /api/user", done => {
        request(app)
            .post("/api/user")
            .send({
                name: "Thiago"
            })
            .expect(200)
            .end((err, res) => {
                expect(res.body).toHaveProperty("name", "Thiago");
                if (err) return done(err);
                done();      
            });
    });

});

    it("should get all users /api/user", done => {
        request(app)
            .get("/api/user")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();      
            });
    });
    
    describe("test /api/user/:userId", () => {
        it("should get a specific user /api/user/:userId", async done => {
            
            request(app)
            .get("/api/user/5c3bf586e2c5c21b3063b846")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();      
            });
        });
        
        it("should update specific user /api/user/:userId", done => {
            
            request(app)
            .put("/api/user/5c3cffdc7c5e3313a4f5c877")
            .expect(200)
            .send({
                name: "Name changed"
            })
            .end((err, res) => {
                expect(res.body).toHaveProperty("name", "Name changed");
                if (err) return done(err);
                done();      
            });
        });
        
        it("should delete a specific user /api/user/:userId", done => {
            
            request(app)
            .delete("/api/user/5c3bf586e2c5c21b3063b846")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();      
            });
        });
    });
    
    describe("test /api/user/:userId/groups", () => {
        
        it("should get a list of groups from a specific user /api/user:userId/groups", done => {
            
            request(app)
            .get("/api/user/5c3cffdc7c5e3313a4f5c877/groups")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();      
            });
        });
    });