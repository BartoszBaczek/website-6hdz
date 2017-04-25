const express = require('express');
const fs = require('fs-extra');

const newsRouter = new express.Router();


newsRouter.get('/news', (request, response, next) => {
    fs.readJson('./data/news.json', 'utf8', (error, news) => {
        if (error) {
            console.log(error);
            return next(error); //nie wiem co to jest
        }

        response.json(news);
    });
});

module.exports = newsRouter;