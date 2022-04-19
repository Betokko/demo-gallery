const API_URL = 'https://api.unsplash.com/'
const ACCESS_KEY = '0MmgtfM0rKg7Y7jU7uWBzbjnOG_Q8uUM77LENzUEMww';

class Api {
    constructor({url, accessKey}) {
        this.url = url;
        this.accessKey = accessKey;
    }

    search({query}) {
        console.log(query);
        return fetch(`${this.url}search/photos?query=${query}`, {
            headers: {
                Authorization: `Client-ID ${this.accessKey}`,
            }
        })
            .then(res => res.json())
    }
}

const config = {
    url: API_URL,
    accessKey: ACCESS_KEY,
}

const api = new Api(config);

export default api;