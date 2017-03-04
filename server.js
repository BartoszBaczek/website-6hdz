const express = require("express");

let app = express();

app.set('port', (process.env.PORT || 3001));

app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log(`App listening on port ${app.get('port')}`);
});





