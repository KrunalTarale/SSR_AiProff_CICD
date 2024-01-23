const route = require('express').Router();
const WhatsappModel = require('../module/whatsapp.module');
const axios = require("axios");
const token = "EAAZAa1WwYEL0BO9sM0FunJDXxondckmtp1ZBml5R7sDrcN1qFFurDZAMe6Ew8ZBwd5zmZAVrey7ZBfjMVPez0xjAnsIljRNLLK7ApXZBLOZAyWuZC9bIq9imKZB8COwaxQmNlFEnZCrEIz0EVQzhhZCAwBTrPPnkZAxsV8ZB7fsBnRl0TsWY9f2o1lX0jB1nkZAs5fQ8En5LZByVGIC5uvqlfwC0TIjQFUvg4eZB0";


route.post("/send-whatsapp-message", async (req, res) => {

  let phone_no_id = req.body.phoneid;
  let from = req.body.phonenumber;

  const url =
  "https://graph.facebook.com/v17.0/" + phone_no_id + "/messages";
const accessToken = token;

const headers = {
  Authorization: `Bearer ${accessToken}`,
  "Content-Type": "application/json",
};

const data = {
  messaging_type: "whatsapp",
  to: from,
  messaging_product: "whatsapp",
  text: {
    body: req.body.message,
  },
};

res.sendStatus(200);

await axios.post(url, data, { headers });



  
    //  console.log(JSON.stringify(response.data));
    const existingUser = await WhatsappModel.findOne({ phonenumber: req.body.phonenumber });
    existingUser.messages.push({ body: req.body.message, timestamp: new Date(),action : "send" });
    await existingUser.save();
  
  });

module.exports = route



//  Logic to save the massege of existing user to the db

// const existingUser = await WhatsappModel.findOne({ phonenumber: req.body.phonenumber });
// existingUser.messages.push({ body: req.body.message, timestamp: new Date(),action : "send" });
// await existingUser.save();