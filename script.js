// whatever is in the dotenv will be loaded into environment
require('dotenv').config();
// check if the variable API_KEY value is distributed
console.log(process.env); 
// locally example npm install dotenv
const api_key = process.env.API_KEY;
console.log(api_key);