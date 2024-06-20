// import {internals} from "./internals";
// import { send } from "./internals/request.mjs";
// import {read } from "./internals/response.mjs";
// const {send} = require('./request');
// const {read} = require('./response');
const internals=require('./internals');
function makeRequest(url,data){
    internals.request.send(url, data);
    return internals.response.read();
}

const responseData = makeRequest('www.google.com','hello');
console.log(responseData);