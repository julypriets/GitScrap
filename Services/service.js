const request = require("request");

module.exports = {
  userPromise: (url, page = "") => {
    const urlF = page ? `${url}&page=${page}` : url;
    console.log(urlF);
    const options = {
      method: "GET",
      url: urlF,
      headers: {
        "User-Agent": "request",
        Authorization: "Bearer "
      }
    };

    return new Promise((resolve, reject) => {
      request(options, function(error, response, body) {
        if (error) reject(error);
        resolve(body);
      });
    });
  },

};
