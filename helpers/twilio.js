const twilio = require("twilio");
const client = new twilio(process.env.ACCOUNTID, process.env.AUTHTOKEN);

exports.sendMessage = (body, receiver) => {
  const messageObject = {
    body,
    to: receiver,
    from: process.env.TWILIONUMBER
  };
  client.message.create(messageObject);
};
