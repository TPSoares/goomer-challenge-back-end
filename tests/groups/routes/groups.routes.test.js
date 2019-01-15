const request = require("supertest");
const app = require("../../../server").app;


describe("test /api/group", () => {
    
    beforeAll(function () {
        process.env.NODE_ENV = 'test';
    });

    it("should create a group /api/group", done => {
        request(app)
        .post("/api/group")
        .send({
            name: "Teste",
            users: ["5c3d333dde59de0d1044de3a", "5c3d3019542b1b16acb48615"]
        })
        .expect(200)
        .end((err, res) => {
            expect(res.body).toHaveProperty("name", "Teste");
            if (err) return done(err);
            done();      
        });
    });
    
    it("should get all users /api/group", done => {
        request(app)
        .get("/api/group")
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            done();      
        });
    });
});
    
    describe("test /api/group/:groupId", () => {
        it("should get a specific group /api/group/:groupId", done => {
            
            request(app)
            .get("/api/group/5c3cfa10d7c8c8089407a40f")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();      
            });
        });
        
        it("should update specific group /api/group:groupId", done => {
            
            request(app)
            .put("/api/group/5c3cfa10d7c8c8089407a40f")
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
        
        it("should delete a specific group /api/group:groupId", done => {
            
            request(app)
            .delete("/api/group/5c3d06864ae5021be01a3510")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();      
            });
        });
    });
    
    describe("test /api/group/:groupId/users", () => {
        
        it("should get a list of users from a specific group /api/group/:groupId/users", done => {
            
            request(app)
            .get("/api/group/5c3bf16f9084f01b34acbd40/users")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();      
            });
        });
    });
    
    describe("test /api/group/:groupId/user/:userId", () => {
        it("should add a user to a specific group /api/group/:groupId/group/:userId", done => {
            
            request(app)
            .put("/api/group/5c3d447a3725da1c807e13e9/user/5c3d3019542b1b16acb48615")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();      
            });
        });
        
        it("should delete a user to a specific group /api/group/:groupId/user/:userId", done => {
            
            request(app)
            .delete("/api/group/5c3d447a3725da1c807e13e9/user/5c3d3019542b1b16acb48615")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();      
            });
        });
        
    });