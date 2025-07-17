const cron = require('node-cron');
const path = require('path');

// Start the Express server
require('./server');

// Import the daily email sender
const { sendDailyEmails } = require('./sendDailyEmails');

// Schedule: every day at 9:00 AM
cron.schedule('30 3 * * *', async () => {
  console.log('Running scheduled daily email');
  await sendDailyEmails();
});

console.log('✅ DailyDiction automation started. Server running and daily email job scheduled.'); 
