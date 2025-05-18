const express = require('express'),
database = require('./db/database'),
maching1 = require('./routes/machings'),
donates1 = require('./routes/donates'),
donations1 = require('./routes/donations'),
donors1 = require('./routes/donors'),
groups1 = require('./routes/groups');

const app = express();
const port = 3000

app.use(express.json());//for req.body

app.use('/machings', maching1);
app.use('/donates', donates1);
app.use('/donations', donations1);
app.use('/donors', donors1);
app.use('/groups', groups1);

app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);
});