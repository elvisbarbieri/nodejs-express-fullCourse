const os = require('os');

//get some info about os system
const user = os.userInfo();

console.log(user);

console.log(`The system Uptime is ${os.uptime()} seconds`);

const currentOS = {

    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    freeMemPercento: os.freemem()/os.totalmem()
}
console.log(currentOS)