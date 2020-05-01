const assert = require('assert');
const api = require('../lib/api');

const getUsersNames = async ({ ids }) => {
    // To Do
    // Please return usernames
}

(async () => {
    const userNames = await getUsersNames({ ids: [ '4', '5', '6' ]});
    // tests
    assert(users.length === 3);
    assert(userNames[0]=== 'Eva');
    assert(userNames[1] === 'Ashley');
    assert(userNames[2] === 'Anna');
})();
