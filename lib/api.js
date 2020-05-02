const USERS = [
    { id: '1', name: 'Andrew', age: 22, sex: 'm', balance: 10000 },
    { id: '2', name: 'John', age: 16, sex: 'm', balance: 120 },
    { id: '3', name: 'Joe', age: 61, sex: 'm', balance: 350000 },
    { id: '4', name: 'Eva', age: 70, sex: 'f', balance: 40000 },
    { id: '5', name: 'Ashley', age: 17, sex: 'f', balance: 10 },
    { id: '6', name: 'Anna', age: 19, sex: 'f', balance: 1000000 },
]

const getHttpResponse = (url) => {
    const [, id] = url.split('/');
    const data = !!id ? USERS.find(user => user.id === id) : USERS;
    return !!data  ? { status: 200, data }: { status: 404 };
};

const request = ({success}) => (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            success ? resolve(getHttpResponse(url)) : reject(getHttpResponse(url));
        }, 500);
    })
}

const requestCallback = ({success}) => (url, cb) => {
    setTimeout(() => {
        if (!success) {
            cb(getHttpResponse(url));
            return;
        }
        cb(null, getHttpResponse(url));
    }, 500);
}

module.exports = {
    request: request({ success: true }),
    requestCallback: requestCallback({ success: true }),
}