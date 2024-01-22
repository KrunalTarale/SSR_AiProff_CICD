import React from 'react';
import express from 'express';
import fs from 'fs';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../src/App.jsx';

const app = express();

app.use(express.json());

require('dotenv').config();

// db conn
const connectToDatabase = require('./module/conn.module')
connectToDatabase();

// Routes

const get_countries = require('./controller/get_countries.route')
app.use(get_countries)
const get_states = require('./controller/get_states.route')
app.use(get_states)
const get_cities = require('./controller/get_cities.route')
app.use(get_cities)
const get_topics = require('./controller/get_topic.route')
app.use(get_topics)
const add_inquiry = require('./controller/add_inquiry.route')
app.use(add_inquiry)
const Subscriber = require('./controller/subscribe_user.route')
app.use(Subscriber)
const UpdateSubscriber = require('./controller/update_subscribed_user.route')
app.use(UpdateSubscriber)
const Send_result = require('./controller/send_result.route')
app.use(Send_result)
const SignUp = require('./controller/signup.route');
app.use(SignUp);
const Login = require('./controller/login.route');
app.use(Login);
const update_article = require('./controller/update_article.route');
app.use(update_article);
const get_user_article = require('./controller/get_user_article.route');
app.use(get_user_article);
const forgetpassword = require('./controller/forgetpassword.route');
app.use(forgetpassword);
const updatepassword = require('./controller/updatepassword.route');
app.use(updatepassword);
const delete_user_Article = require('./controller/delete_user_Article.route');
app.use(delete_user_Article);
const webhook = require('./controller/webhook.route');
app.use(webhook);
const whatsapp_webhook = require('./controller/whatsapp_webhook.route');
app.use(whatsapp_webhook);
const getWhatsAppdata = require('./controller/getWhatsAppdata.route');
app.use(getWhatsAppdata);
const getwhatsappuserbyid = require('./controller/get_whatsappuserbyid.route');
app.use(getwhatsappuserbyid);
const sendwhatsAppMessages = require('./controller/sendwhatsAppMessages.route');
app.use(sendwhatsAppMessages);






// Handle redirects for specific file types
// app.use((req, res, next) => {
//   if (/\.js$|\.css$|\.png$|\.jpg$|\.svg$|\.jpeg$|\.mp3$/.test(req.path)) {
//     if (!req.path.startsWith('/dist')) {
//       return res.redirect('/dist' + req.path);
//     }
//   }
//   next();
// });

// app.use((req, res, next) => {
//   if (/\.js$|\.css$|\.png$|\.jpg$|\.svg$|\.jpeg$|\.mp3$/.test(req.path)) {
//     if (!req.path.startsWith('/dist')) {
//       return res.redirect('/dist' + req.path);
//     }
//   }
//   next();
// });


// Serve static files first
// app.use('/dist', express.static(path.resolve(__dirname, '..', 'dist')));
app.use('/dist' , express.static('../dist'));

app.use((req,res,next) => {
  if (/\.js$|\.css$|\.png$|\.jpg$|\.svg$|\.jpeg$|\.mp3$/.test(req.path)){
    res.redirect('/dist' + req.path)
  }else{
    next()
  }
})

app.get('/sitemap.xml', (req, res) => {
  const filePath = path.resolve(__dirname, '../public/sitemap.xml');
  res.sendFile(filePath);
});

// Server-side rendering middleware
const serverRenderer = (req, res) => {
  const context = {};
  fs.readFile(path.resolve('../dist/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }

    

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        )}</div>`
      )
    );
  });
};

// Handle all other requests with server-side rendering
app.use('/', serverRenderer);


app.listen(1338, () => {
  console.log('Server is running on port 1338');
});