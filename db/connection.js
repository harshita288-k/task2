const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
 // await mongoose.connect('mongodb+srv://harshita28kumawat:1QbrFT1vslIHqpm4@cluster0.cgu9soz.mongodb.net/?retryWrites=true&w=majority');
 await mongoose.connect('mongodb://127.0.0.1:27017/taskDB');
 
 console.log("Successfully connected to DB")
}