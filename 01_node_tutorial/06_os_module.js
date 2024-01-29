const { log } = require('console')
const os = require('os')

// Info about the current user

console.log(os.userInfo())

// Method that returns the system uptime

console.log(`The system UpTime is ${os.uptime()} seconds`);

// These methods are related to our system

console.log(`The system platform is ${os.platform()}`);
console.log(`The system release is ${os.release()}`);
console.log(`The system hostname is ${os.hostname()}`);
console.log(`The system totalmem is ${os.totalmem()}`);
console.log(`The system freemem is ${os.freemem()}`);
console.log(os.type()); 