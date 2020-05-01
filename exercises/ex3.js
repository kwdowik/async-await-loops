const assert = require('assert');
const api = require('../lib/api');

const getUsers = async ({ ids }) => {
    // To Do
    // Please return only men with balance above 5000
}

(async () => {
    const users = await getUsers({ ids: [ '1', '2', '3', '4', '5', '6' ]});
    // tests
    assert(users.length === 2);
    assert(users[0].name=== 'Andrew');
    assert(users[1].name === 'Joe');
})();
