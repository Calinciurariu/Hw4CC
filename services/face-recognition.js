require('dotenv').config();

const URL = process.env.FACE_RECOGNITION_URL;
const KEY = process.env.FACE_RECOGNITION_KEY;

const fetch = require('node-fetch');

module.exports = {
    getFace: async (imageUrl, callback) => {
        const body = {
            "url": imageUrl
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
