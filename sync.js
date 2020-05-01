const assert = require('assert');

const api = require('./lib/api');
const { counting } = require('./lib/counting');

const getUsersSync = ({ ids }) => {
    const users = [];
    for (let i = 0; i < ids.length; i++) {
        api.requestSync(`/${ids[i]}`, (err, res) => {
            if (err) throw err;
            const { data } = res;
            users.push(data);
        });
    }
    return users;
}

console.log('Waiting for sync users...');
(() => {
    console.time('getUsers');
    const users = getUsersSync({ ids: [ '1', '2', '3', '4' ] });
    console.timeEnd('getUsers');

    assert(users.length === 4);
})()

counting(10);
