const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Middleware to parse webhook body as JSON

// Handle webhook POST request
app.post('/webhook', async (req, res) => {
  // Get ticket information from webhook body

  // Send message to Zoho Cliq
  try {
    const response = await axios.post('https://cliq.zoho.com/api/v2/channelsbyname/apitestingb/message?zapikey=1001.8690e3b26a53b3f3a879853428de4d3f.d6f77b0e08b607fe39a18273b241ae82', {
      text: `New ticket created:`,
    });
    console.log('Message sent to Zoho Cliq:', response.data);
  } catch (error) {
    console.error('Error sending message to Zoho Cliq:', error);
  }

  // Send response to webhook
  res.sendStatus(200);
});

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
