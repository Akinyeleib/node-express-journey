console.log("Modules file...");

const addition = (x, y) => x + y;
const subtraction = (x, y) => x - y;


module.exports.add = addition;
module.exports.sub = subtraction;

// console.log(module.exports);
