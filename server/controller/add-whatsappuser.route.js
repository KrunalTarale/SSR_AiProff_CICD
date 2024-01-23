const route = require('express').Router();
const axios = require("axios");
const token = "EAAZAa1WwYEL0BO9sM0FunJDXxondckmtp1ZBml5R7sDrcN1qFFurDZAMe6Ew8ZBwd5zmZAVrey7ZBfjMVPez0xjAnsIljRNLLK7ApXZBLOZAyWuZC9bIq9imKZB8COwaxQmNlFEnZCrEIz0EVQzhhZCAwBTrPPnkZAxsV8ZB7fsBnRl0TsWY9f2o1lX0jB1nkZAs5fQ8En5LZByVGIC5uvqlfwC0TIjQFUvg4eZB0";

route.post('/add-whatsapp-user' , (req,res) => {


    let phone_no = req.body.phoneno;
    console.log(phone_no);

    const url = 'https://graph.facebook.com/v18.0/185315941321665/messages';
    const accessToken = token; 
    
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };
    
    const data = {
      messaging_product: 'whatsapp',
      to: phone_no,
      type: 'template',
      template: {
        name: 'temp1',
        language: {
          code: 'en_US',
        },
      },
    };
    
    axios.post(url, data, { headers })
      .then(response => {
        console.log('Message sent successfully:', response.data);
      })
      .catch(error => {
        console.error('Error sending message:', error.message);
      });
    

})

module.exports = route
