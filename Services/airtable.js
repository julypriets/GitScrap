const Airtable = require("airtable");
const base = new Airtable({ apiKey: "" }).base(
  ""
);

module.exports = {
  create: data => {
    base("Emails").create(data, function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      console.log("insert!");
    });
  }
};
