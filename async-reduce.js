const assert = require('assert');
const api = require('./lib/api');
const { counting } = require('./lib/counting');

const getUsersBalance = async ({ ids }) => {
    const sum = ids.reduce(async (prev, id) => {
        const { data } = await api.request(`/${id}`);
        const prevSum = await prev;
        return prevSum + data.balance;
    }, 0);
    return Promise.resolve(sum);
}

console.log('Waiting for users...');
(async () => {
    console.time('getUsersBalance');
    const sum = await getUsersBalance({ ids: [ '1', '2', '3', '4' ]});
    console.timeEnd('getUsersBalance');
    
    assert(sum === 400120);
})();

counting(10);