import fetchService from './fetchService';

const aboutUsService = {
    getAll (callback) {
        return fetchService.get('api/people', callback);
    }
};

export default aboutUsService;