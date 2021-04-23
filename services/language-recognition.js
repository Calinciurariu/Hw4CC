require('dotenv').config();

const URL = process.env.LANGUAGE_RECOGNITION_URL;
const KEY = process.env.LANGUAGE_RECOGNITION_KEY;

const fetch = require('node-fetch');

module.exports = {
    getLanguage: async (text, callback) => {
        const body = {
            "documents": [
                {
                    "id": 1,
                    "text": text
                }
            ]
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
            .then(json => {
                callback(json.documents[0].detectedLanguages[0].name);
            });
    }
}
