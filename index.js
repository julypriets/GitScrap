const fs = require("fs");
const servicePromises = require("./Services/service");
const createMail = require("./Services/getmail");
const names = require("./names");

async function users(url) {
  for (let i = 1; i < 100; i++) {
    const result = await servicePromises.userPromise(url, i);
    await sleep();

    try {
      const info = JSON.parse(result);
      if (info.items.length == 0) {
        throw "no hay más correos por capturar";
      }
      await insertUrlsUsers(info.items);
      await sleep();
    } catch (e) {
      console.log(e);
      return;
    }
  }
}

async function insertUrlsUsers(users) {
  for (let i = 0; i < users.length - 1; i++) {
    await sleep();

    if (users.length > 0) {
      await createMail.init(users[i].url);
    }
  }
}

function sleep() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("ok");
    }, 2000);
  });
}

async function init() {
  const countNames = names.data.length - 1;
  for (let i = 0; i < countNames; i++) {
    console.log(i);
    let url = `https://api.github.com/search/users?q=${names.data[i]}+language:javascript+language:nodejs`;
    await users(url);
  }
}

exports.init = init();
