import fetchService from './fetchService';

const aboutUsService = {
    getAll (callback) {
        return fetchService.get('http://localhost:3000/api/people', callback);
    }
};

export default aboutUsService;