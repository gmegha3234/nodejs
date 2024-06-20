
function decrypt(data){
 return 'decrypted data'
}
function read(){
    const decryptedData = decrypt('data');
    return decryptedData;
}
// module.exports={
//     read
// }
export {read}