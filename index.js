// console.log("This is node js project for tutorials");

const { Console } = require("console");

// process.exit(0);
// const _ = require("lodash");
// const arr=[1,2,3,4];
// console.log(_.chunk(arr))
// const car = require("./car");
// console.log(car.obj1)
// const fs= require("fs");

// fs.writeFileSync("dummy.txt","This is my dummy file")
// fs.writeFileSync("dummy.txt","This is my dummy file2")
// fs.appendFileSync("dummy.txt"," Appened text")
// console.log(fs.readFileSync("dummy.txt").toString())

// CRUD operation on a file
// Challange Time
// 1.Create a folder name called Lama
// 2.Create a file name clled bio.txt and data into it.
// 3.Add more data into the file at the end of the existing data.
// 4.Read the data without getting the buffer data at first.
// 5.Rename the file into mybio.txt
// 5.Now delete both the file and the folder

// const fs = require("fs");
// const path="parentfoldernew/bio.txt";
// fs.mkdirSync(path.split("/")[0]);
// fs.writeFileSync(path,"This is my bio.txt file")
// fs.appendFileSync(path," This is my appended textnew");
// const content = fs.readFileSync(path,"utf-8");
// console.log(content)
// fs.renameSync(path,"parentfoldernew/newfile.txt")
// fs.unlinkSync("parentfoldernew/newfile.txt")
// fs.rmdirSync("parentfoldernew")

// ASYNCHRONOUS FILE SYSTEM IN NODE JS
// const fs = require("fs");
// fs.writeFile("hello.txt","This is my file content",()=>{
//     console.log("file created successfully")
// })
// fs.readFile("hello.txt","utf-8",(error,data)=>{
//     console.log(error)
//     console.log(data)
// })
// fs.readFile("hello.txt", "utf-8", (err,data) => {
//   console.log(data);
// });

// console.log("after the data");

/* 12_Sep_2020pH afternoon */
// Challenge by Thapa

/*
1. Create a folder named it Thapa
2. Create a file in it named bio.txt and add data into it.
3. Add more data into the file at the end if the existing data.
4. Read the data without getting buffer data 
5. Rename the file name to mybio.txt
6. Now delete both file and folder.
*/

// const fs = require("fs");
// fs.mkdir("Thapa2", () => {});

// fs.writeFile(
//   "Thapa/bio.txt",
//   "This is my file named bio.txt inside Thapa folder",
//   () => {}
// );
// fs.appendFile("Thapa2/bio.txt", " This is my extended conetent ", () => {
//   console.log("file appened");
// });

// fs.rename("Thapa2/bio.txt", "Thapa2/bionew.txt", () => {});
// fs.readFile("Thapa2/bionew.txt", "utf-8", (err, data) => {
//   console.log(data);
// });
// fs.unlink("Thapa2/bionew.txt", () => {});
// fs.rmdir("Thapa2",(err)=>{
//     console.log(err)

// })

// Operating system modules in nodejs

// const os = require("os");
// console.log(os.arch());
// console.log(`Memory in bytes ${os.freemem()}`);
// console.log(`Memory in GB ${os.freemem() / 1024 / 1024 / 1024}`);
// console.log(`Total Memory in bytes ${os.totalmem()}`);
// console.log(`Total Memory in GB ${os.totalmem() / 1024 / 1024 / 1024}`);
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.cpus())
// console.log(os.userInfo())
// console.log(os.type())

// Import subtract and add module from .path file
// const fun= require("./path");
// console.log(fun.subtract(3,4))
// console.log(fun.add(3,4))

// (function(){

//   const chalk = require("chalk");
//   const validator= require("validator")
//   console.log(chalk.blue.underline("This is my color in green color"))
//   console.log(validator.isEmail('foo@bar.com'))
// })()

// What is a web server
// const http = require("http");
// var url = require('url');
// // console.log(http);
// http.createServer((req,res)=>{
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');

//   var q = url.parse(req.url, true).query;
//   /*Return the year and month from the query object:*/
//   var txt = q.year + " " + q.month;
//   res.write(txt)
//   res.end();
//   res.end()

// }).listen(8080)

// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.write(req.url);
//   console.log(res)
//   res.end()
// });
// server.listen(8080);

// const bioData= {
//   name:"Vinod",
//   age:89
// }
// console.log(bioData.age)
// const jsonStringBioData = JSON.stringify(bioData);
// console.log(jsonStringBioData)
// const fs= require("fs");
// fs.writeFileSync("thapa.json",jsonStringBioData)
// const content=fs.readFileSync("thapa.json","utf-8");
// console.log(content)

// How to create server in node js
// const http= require("http");
// const url = require("url");
// const server=http.createServer((req,res)=>{
//   console.log(req.url)
//   res.write('Hello World!'); //write a response to the client
//   var q = url.parse(req.url, true).query;
//   /*Return the year and month from the query object:*/
//   var txt = q.name + " " + q.age;
//   res.end(txt); //end the response
// })
// server.listen(8080)

// const bioData= {
//   name:"Vinod",
//   age:89
// }
// const jsonData= JSON.stringify(bioData);
// const fs = require("fs");
// fs.writeFileSync("bioData.json",jsonData);
// fs.readFile("bioData.json",'utf8',(err,data)=>{
//   console.log(JSON.parse(data))

// })

// const http = require("http");
// const fs=  require("fs");
// const server= http.createServer((req,res)=>{
//   fs.readFile("./UserApi/userApi.json","utf8",(err,data)=>{
//     res.writeHead(200, { 'Content-Type': 'application/json' });

//     res.end(data)
//   })

// })
// server.listen(8080)

// Events in node js
// var events = require("events");
// var eventEmitter = new events.EventEmitter();
// eventEmitter.on("event", () => {
//   console.log("an event occurred!");
// });
// eventEmitter.emit("event");

//stream 
// console.log("hello")
// const fs = require("fs");

// const http = require("http");
// console.log("vr");

// const server = http.createServer((req, res) => {
//     reader = fs.createReadStream('input.txt'); 
  
//     // Read and display the file data on console 
//     reader.on('data', function (chunk) { 
//         console.log(chunk.toString()+"h"); 
//         res.write(chunk.toString())
//     }); 
//     reader.on("end",()=>{

//     })
// });
// console.log(server);

// server.listen(8080);



// const {items,person}=require("./input");
// console.log(items,person)

// OS MODULE
// const os=require("os");
// console.log(os.arch())
// console.log(os.userInfo())
// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
//   }
//   console.log(currentOS)

// PATH MODULE
// const path =require("path");
// const basename= path.dirname("input.js");
// console.log(basename)
  
//File module
const fs = require("fs");
// const { concat } = require("lodash");
// const content=fs.readFileSync("input.txt","utf-8");
// console.log(content)
// fs.writeFileSync("dummy.txt","This is the dummy text in dummy.txt");
// fs.appendFileSync("dummy.txt","\n This is the dummy2 text in dummy.txt");

// fs.readFile("dummy.txt","utf-8",(err,data)=>{
//     console.log(data)
// })

// fs.appendFile("dummy.txt","Appened text",(err,data)=>{
//     console.log(data)

// }) 
const http = require("http");
const _ = require("lodash")
const items=[1,[2],[3],[4,[5,[6]]]];
const newitems = _.flattenDeep(items);
console.log(newitems)

http.createServer((req,res)=>{
    console.log(req.url)
    if (req.url=="/about"){
        res.write("Hello server about!")
    }
    else{
        res.write("Hello server !") 
    }
   
    res.end()

}).listen(8080)