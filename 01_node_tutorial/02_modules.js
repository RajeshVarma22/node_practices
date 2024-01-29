// Modules are commonJs, every file is a module by default
// Modules are encapsulated, only sharing a minimum content which is needed only.

const dist_names = require('./03_districts_names');

// console.log(dist_names);

const welcoming = require('./04_utills');


// welcoming(dist_names.karnataka)
// welcoming(dist_names.telangana)
// welcoming(dist_names.tamilnadu)
welcoming(dist_names.kerala)


// The file is not exported but here we can import it

require('./05_ex_default_export')