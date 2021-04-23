const URL = '';
const KEY = '';

const fetch = require('node-fetch');

module.exports = {
    translate: async (text, callback) => {
        const body = {
            "url": text
        };

        fetch(URL, {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': KEY
            },
        })
            .then(res => res.json())
            .then(json => callback(json));
    }
}
