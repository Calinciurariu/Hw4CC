require('dotenv').config();

const URL = process.env.KEY_PHRASE_URL;
const KEY = process.env.KEY_PHRASE_KEY;

const fetch = require('node-fetch');

module.exports = {
    getKeyPhrases: async (text, callback) => {
        const body = {
            "documents": [
                {
                    "language": "en",
                    "id": "1",
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
                callback(json.documents[0].keyPhrases);
            });
    }
}
