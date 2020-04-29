const express = require('express');
var indexRouter = require('./routes')

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter)

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
