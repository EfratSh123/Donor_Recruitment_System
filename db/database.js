//import the module
const mongoose = require('mongoose');
//if error happen it’s catch here
main().catch(err => console.log(err));
async function main() {
//the connect function of mongoose get the connection string to local or remote db
await mongoose.connect('mongodb+srv://EfratShmueli:Ab327706123@cluster0.3luzz.mongodb.net/MachingDB');
console.log('connect!!')
}
module.exports = mongoose;