const assert = require('assert');

const api = require('./lib/api');
const { counting } = require('./lib/counting');

const getUsers = async ({ ids }) => {
    const users = [];
    console.time('getUsers');
    ids.forEach(async id => {
        const { data } = await api.request(`/${id}`);
        users.push(data);
    });
    console.timeEnd('getUsers');
    return users;
}

console.log('Waiting for async users...');
(async () => {
    const users = await getUsers({ ids: [ '1', '2', '3', '4' ]});

    assert(users.length === 4);
    assert(typeof users[0].id === 'string');
})();

counting(10);
