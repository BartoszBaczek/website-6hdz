const express = require("express");
const aboutUsRouter = require('./server/backend/routers/aboutUsRouter');
const partnersRouter = require('./server/backend/routers/partnersRouter');
const newsRouter = require('./server/backend/routers/newsRouter');

let app = express();

app.set('port', (process.env.PORT || 3001));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.use('/api', aboutUsRouter);
app.use('/api', partnersRouter);
app.use('/api', newsRouter);


app.listen(app.get('port'), () => {
    console.log(`App listening on port ${app.get('port')}`);
});





