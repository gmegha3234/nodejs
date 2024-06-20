const { log } = require('console');
const EventEmitter = require('events');
const celebrity=new EventEmitter();
celebrity.on('race-win',function(result){
    if(result==="win")
    console.log("Congrats,you win the race!!");//Observer 1
})
celebrity.on('race-win',function(result){
    if (result === "lose")
         console.log("Bro I may have won the race.");//Observer 2
})

//emit event
celebrity.emit('race-win','win');
celebrity.emit('race-win','lose');
process.on('exit',(code)=>{
    console.log('Process exit end with code',code);
})