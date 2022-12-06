const app = require('./app');
require('dotenv').config()


app.listen(3000, () => console.log(`server running on port 3000`));
