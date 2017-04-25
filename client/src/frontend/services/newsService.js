import fetchService from './fetchService';

const newsService = {
    getAll (callback) {
        return fetchService.get('api/news', callback);
    }
};

export default newsService;