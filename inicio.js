const app = require('./app');
require('dotenv').config()


app.listen(process.env.PORTA, () => console.log(`server running on port ${process.env.PORTA}`));
