const axios = require("axios")

const users = async () => {
    try {
        const res = axios.get('https://jsonplaceholder.typicode.com/users');
        return res.data
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    users
}