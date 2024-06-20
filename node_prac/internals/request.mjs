function encrypted(){
    return "encrypted";
}
function send(url,data){
  const encryptedData = encrypted(data);
  console.log(`Sending ${encryptedData} to ${url}`);

}
// module.exports={
//     send
// }
export{
    send
}