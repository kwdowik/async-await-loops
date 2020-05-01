
module.exports.pipeAsync = 
    (...fns) => arg => fns.reduce(async (prev, fn) => await prev.then(fn), Promise.resolve(arg));