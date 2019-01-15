# CRUD RESTful Node.js

CRUD example for users and groups control.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [Nodejs](https://nodejs.org/en/) - The JavaScript run-time environment
* [Mongodb](https://www.mongodb.com/) - The database to sabe your data
* Any software that shows your data like Robo3T or Mongodb Compass
* Any API development environment where you can make requests to the API like [Postman](https://www.getpostman.com/)

### Installing

A step by step series of examples that tell you how to get a development env running

* Clone the repository into your local machine
* Open your terminal window and go to the directory of the project and install all the projects dependencies with npm

```
npm install
```

* Start mongodb on the terminal

```
mongod
```

- you may need to start it with sudo depending on your OS.

* To run the API, simply start mongodb as well as the application with npm

```
npm start
```

## API documentaion

After your run the API on your local machine, you can start

### User endpoints

```
/api/user
```
* Get all registered users (GET)
* Create a new user (POST)

#### Request Body
- name: String

```
/api/user/:userId
```
* Get a specific user (GET)

#### Request Params
- userId -> id of the user

* Update the user (PUT)

#### Request Params
- userId -> id of the user

#### Request Body
- name: String
* Delete the user (DELETE)

```
/api/user/:userId/groups
```
* Get all groups from a user (GET)

### Group endpoints


```
/api/group
```
* Get all registered groups (GET)
* Create a new group (POST)

#### Request Body
- name: String
- users: [ObjectId] -> User id

```
/api/group/:groupId
```
* Get a specific group (GET)

#### Request Params
- groupId -> id of the group

* Update the group (PUT)

#### Request Params
- groupId -> id of the group

#### Request Body
- name: String

* Delete the group (DELETE)

```
/api/group/:groupId/users
```

#### Request Params
- groupId -> id of the group

* Get all users from a group (GET)

```
/api/group/:groupId/users
```
* Add a user to a group (PUT)

#### Request Params
- groupId -> id of the group

#### Request Body
- users: [ObjectId] -> User id

* Delete a user from a group (DELETE)


#### Request Params
- groupId -> id of the group

#### Request Body
- users: [ObjectId] -> User id

## Running the tests

* To run the tests, run the following code on your terminal

```
npm test
```

All the tests were created to check if all the API's end points were working as they should.
