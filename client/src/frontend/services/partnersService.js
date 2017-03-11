import fetchService from './fetchService';

const partnersService = {
    getAll (callback) {
        return fetchService.get('api/partners', callback);
    }
};

export default partnersService;