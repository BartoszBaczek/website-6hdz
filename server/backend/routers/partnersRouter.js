const express = require('express');
const fs = require('fs-extra');

const partnersRouter = new express.Router();


partnersRouter.get('/partners', (request, response, next) => {
    fs.readJson('./data/partners.json', 'utf8', (error, partners) => {
        if (error) {
            console.log(error);
            return next(error); //nie wiem co to jest
        }

        response.json(partners);
    });
});

module.exports = partnersRouter;