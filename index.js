const cron = require('node-cron');

cron.schedule("* * * * * *",()=>{
    console.log('After Every 5 sec');
},{
    scheduled : true
});

//refer doc here for various time related queries https://www.npmjs.com/package/node-cron

