// users in JSON file for simplicity, store in a db for production applications
let users = require('../../data/user.json');

export const usersRepo = {
    getAll: () => users,
    find: x => users.find(x)
};