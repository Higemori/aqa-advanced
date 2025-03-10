const axios = require('axios')
const jsonData = require('./env.json')
const { faker } = require('@faker-js/faker')
const fs = require('fs')
const CustomControllers = require('./controllers.js')
const { json } = require('stream/consumers')
const controllers = new CustomControllers()

jest.mock('axios');

describe('error handling API tests', () => {
    test('wrong URL test', async() => {
        try {
            const response = await axios.get(jsonData.wrongUrl);
        } catch (exceptionVar) {
            expect(exceptionVar.response.status).toBe(404);
            expect(exceptionVar.message).toMatch('Request failed with status code 404');
        }
    });

    test('test with custom headers and parameters', async() => {
        const url = 'https://api.random.com/data';
        const params = {userId: 'myUser', status: 'active'};
        const headers = {Authorization: 'Bearer tokenExample', 'Custom-Header': 'CustomValue'};

        const mockData = { message: 'Success with headers and params' };
        axios.get.mockResolvedValueOnce({ data: mockData });

        const response = await controllers.fetchData(url, params, headers);

        expect(response).toEqual(mockData);
        expect(axios.get).toHaveBeenCalledWith(url, {
            params,
            headers,
        });
    });

    test('should return data when the request is successful', async() => {
        // Mocking successful response
        const mockData = {message: 'Success'};
        axios.get.mockResolvedValueOnce({ data: mockData });

        const response = await controllers.fetchData(jsonData.wrongUrl);

        expect(response).toEqual(mockData);
        expect(axios.get).toHaveBeenCalledWith(jsonData.wrongUrl, {params: {}, headers: {} });
    });

    test('should throw an error when the request fails', async () => {
        // Mocking a failed response
        const mockError = new Error('Request failed');
        axios.get.mockRejectedValueOnce(mockError);

        await expect(controllers.fetchData(jsonData.wrongUrl)).rejects.toThrow('Request failed');
        expect(axios.get).toHaveBeenCalledWith(jsonData.wrongUrl, {params: {}, headers: {} });
    });
});
