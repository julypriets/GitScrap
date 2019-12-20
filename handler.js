"use strict";
//Our Code is Poetri, create your function, and deploy easily and automatically in cloud
//make sure your handler’s name matches the value in poetri.yml

const index = require("./index");

module.exports.helloWorld = async context => {
  //environments, extract your environments of process.env
  //const apiKey = process.env.API_KEY

  //inputs, extract your inputs of context.body
  const params = context.body;

  //structure of your endpoint responsem that is a basic object of javascript
  const response = {
    statusCode: 200,
    body: {
      message: "Function executed successfully",
      //you can invoque function, create the functions that you want
      total: 100,
      inserted: 100,
    }
  };


  //return the response that you will receive at your endpoint
  return response;
};

//write your function
function youFunction() {
  //return index.init;

}

