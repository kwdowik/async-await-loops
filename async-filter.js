const assert = require('assert');
const api = require('./lib/api');
const { counting } = require('./lib/counting');
const { pipeAsync } = require('./lib/helper');

const getUsers = async ({ ids }) => {
    const promises = ids.map(async id => {
        const { data } = await api.request(`/${id}`);
        return data;
    });
    return await Promise.all(promises);
}

const getAdultUsers = (users) => users.filter(user => user.age > 18);

console.log('Waiting for users...');
(async () => {
    console.time('getUsers');
    const adultUsers = await pipeAsync(
        getUsers,
        getAdultUsers
    )({ ids: [ '1', '2', '3', '4' ]});
    console.timeEnd('getUsers');

    assert(adultUsers.length === 3);
    adultUsers.forEach(user => assert(user.age > 18));
})();

counting(10);