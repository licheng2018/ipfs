const ipfsFile = require('./ipfsFile');
const fs = require('fs');


let addPath = "../onepiece.JPG";
let getPath = "../onepiece.JPG";
let buff = fs.readFileSync(addPath);

//操作文件
ipfsFile.add(buff).then((hash)=>{
    console.log(hash);
    console.log("http://localhost:8080/ipfs/"+hash);
    return ipfsFile.get(hash);
}).then((buff)=>{
    fs.writeFileSync(getPath,buff);
    console.log("file:"+getPath);
}).catch((err)=>{
    console.log(err);
})

//操作内容
let User = {
    "name":"naruto",
    "age":23,
    "level":"ss"
};
buff = Buffer.from(JSON.stringify(User));
ipfsFile.add(buff).then((hash)=>{
    console.log(hash);
    console.log("http://localhost:8080/ipfs/"+hash);
    return ipfsFile.get(hash);
}).then((buff)=>{
    let obj = JSON.parse(buff.toString('utf-8'));
    console.log(obj);
}).catch((err)=>{
    console.log(err);
}
)
