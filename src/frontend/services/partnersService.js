import fetchService from './fetchService';

const partnersService = {
    getAll (callback) {
        return fetchService.get('http://localhost:3000/api/partners', callback);
    }
};

export default partnersService;