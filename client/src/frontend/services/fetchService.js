import request from 'superagent';

const fetchService = {
    get (url, callback) {
        return request.get(url)
        .set({
            'Accept-Language': navigator.browserLanguage | navigator.language
        })
        .end(callback);
    }
}

export default fetchService;