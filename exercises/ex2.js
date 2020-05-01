const assert = require('assert');
const api = require('../lib/api');

const getUsersAge = async ({ ids }) => {
    // To Do
    // Please return total age of users
}

(async () => {
    const sumAge = await getUsersAge({ ids: [ '1', '2', '3', '4', '5', '6' ]});
    // tests
    assert(sumAge === 205);
})();
