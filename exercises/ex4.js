const assert = require('assert');
const api = require('../lib/api');

const getTotalBalance = async ({ ids }) => {
    // To Do
    // Please return total balance of users which are adult (18) women
}

(async () => {
    const totalBalance = await getTotalBalance({ ids: [ '1', '2', '3', '4', '5', '6' ]});
    // tests
    assert(totalBalance === 1040000);
})();
