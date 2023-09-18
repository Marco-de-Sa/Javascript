let cnt = 0;
function outputTime(val) {
    return new Promise(resolve => {
        setTimeout(() => {
            cnt++;
            resolve(`x value ${val} counter:${cnt}`);
        }, 1000);
    });
}
async function aCall(val) {
    console.log(`ready ${val} counter:${cnt}`);
    const res = await outputTime(val);
    console.log(res);
}
for (let x = 0; x < 10; x++) {
    aCall(x);
}