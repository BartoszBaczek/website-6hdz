const express = require("express");
const aboutUsRouter = require('./src/backend/routers/aboutUsRouter');
const partnersRouter = require('./src/backend/routers/partnersRouter');

let app = express();

app.set('port', (process.env.PORT || 3001));

app.use(express.static('public'));

app.use('/api', aboutUsRouter);
app.use('/api', partnersRouter);


app.listen(app.get('port'), () => {
    console.log(`App listening on port ${app.get('port')}`);
});





