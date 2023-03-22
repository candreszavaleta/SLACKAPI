require('dotenv').config();
const { WebClient } = require('@slack/web-api');

// Read a token from the environment variables
const token = process.env.SLACK_TOKEN;

// Initialize
const web = new WebClient(token);
console.log(token);


const conversationId = 'C04SFD8RX6H';

(async () => {

  // Post a message to the channel, and await the result.
  // Find more arguments and details of the response: https://api.slack.com/methods/chat.postMessage
  const result = await web.chat.postMessage({
    text: 'Hello world!',
    channel: conversationId,
  });

  // The result contains an identifier for the message, `ts`.
  console.log(`Successfully send message ${result.ts} in conversation ${conversationId}`);
})();


async function sendMessage(message){
    const result = await web.chat.postMessage({
        text: message,
        channel: conversationId,
      });
      console.log(`Successfully send message ${result.ts} in conversation ${conversationId}`);

}
sendMessage("holiiii");