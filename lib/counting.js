
module.exports.counting = (count) => {
    console.log('Counting...')
    let i = 0;
    const id = setInterval(() => {
        if (i > count) {
            clearInterval(id);
            return;
        }
        console.log(i++);
    }, 500);
}