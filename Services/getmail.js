const servicePromises = require("./service");
const airtable = require("./airtable");

module.exports = {
  init: async url => {
    const result = await servicePromises.userPromise(url);
    const user = await JSON.parse(result);
    console.log(user.email);
    if (user.email) {
      await airtable.create([
        {
          fields: {
            Name: user.name ? user.name : user.login,
            Email: user.email,
            Company: user.company,
            Blog: user.blog,
            Location: user.location,
            Repos: user.public_repos,
            Followers: user.followers,
            Following: user.following,
            Created: user.created_at
          }
        }
      ]);
    }
  }
};
