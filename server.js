// import schema from ''
const express = require("express");
// const schema = require('schema');
// import graphlHTTP from 'express-graphql'
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const morgan = require("morgan");
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// import express from 'express';
// import mongoose from 'mongoose';
// import graphlHTTP from 'express-graphql'; // new
// import schema from './schema.js'; // new 현재 폴더에 파일 추가 schema.js

// const app = express();
// const port = 5000;
// mongoose.Promise = global.Promise;


// morgan 사용
app.use(morgan("dev"));

// test를 위한 기본 라우팅 설정
app.get("/", (req, res) => {
  res.send("NodeJs Server on");
});
// app.use(`/graphql`, graphlHTTP({
//     schema: schema,
//     graphiql: true
// })); // new

app.listen(port, () => {
  console.log(`Express server has Started on port ${port}`);
});

// mongoose 설정
mongoose.connect(`mongodb+srv://cluster0.kcxoi.mongodb.net/myFirstDatabase`);

// mongodb+srv://cluster0.kcxoi.mongodb.net/myFirstDatabase

const db = mongoose.connection;
db.on("error", console.error);
db.once("open", () => {
  console.log("Connected to mongodb Server");
});

// var user = mongoose.Schema({
//     id : 'number',
//     name : 'string',
//     birth_year : 'number',
//     sex : 'string',
// });
// // 7. 정의된 스키마를 객체처럼 사용할 수 있도록 model() 함수로 컴파일
// var User = mongoose.model('Schema', user);

// // 8. Student 객체를 new 로 생성해서 값을 입력
// // var newStudent = new Student({name:'Hong Gil Dong', address:'서울시 강남구 논현동', age:'22'});

// // 9. 데이터 저장
// // newStudent.save(function(error, data){
// //     if(error){
// //         console.log(error);
// //     }else{
// //         console.log('Saved!')
// //     }
// // });

// var select = mongoose.Schema({
//     id : 'number',
//     reason : 'string',
//     weather : 'string',
//     member : 'number',
//     time : 'string',
//     color : 'string',
//     snack : 'string',
//     drink : 'string',
//     food : 'string'

// });
