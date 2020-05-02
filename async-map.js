const assert = require('assert');
const api = require('./lib/api');
const { counting } = require('./lib/counting');

const getUsers = async ({ ids }) => {
    const users = ids.map(async id => {
        const { data } = await api.request(`/${id}`);
        return data;
    });
    return Promise.all(users);
}

console.log('Waiting for users...');
(async () => {
    console.time('getUsers');
    const users = await getUsers({ ids: [ '1', '2', '3', '4' ]});
    console.timeEnd('getUsers');

    assert(users.length === 4);
    assert(typeof users[0].id === 'string');
})();

counting(10);