const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

module.exports = async (context, req) => {
  const { email, phone, supportPin, category, moreInfo } = req.body;
  base("complaints").create(
    {
      email,
      phone,
      category,
      "support-pin": supportPin,
      "more-info": moreInfo,
    },
    (err, record) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("saved to DB");
    }
  );

  context.res = {
    body: "saved to db",
  };
};
