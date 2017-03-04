const express = require('express');
const fs = require('fs-extra');

const aboutUsRouter = new express.Router();


aboutUsRouter.get('/people', (request, response, next) => {
    fs.readJson('./data/people.json', 'utf8', (error, people) => {
        if (error) {
            console.log(error);
            return next(error); //nie wiem co to jest
        }

        response.json(people);
    });
});

module.exports = aboutUsRouter;