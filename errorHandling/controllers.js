const axios = require('axios')

module.exports = class CustomControllers {
    fetchData = async (url, params = {}, headers = {}) => {
        try {
            const response = await axios.get(url, {
                params,
                headers,
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    };
}