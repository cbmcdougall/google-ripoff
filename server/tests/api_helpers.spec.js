const findResults = require('../assets/api_helpers');
jest.mock('../assets/api_helpers');


const apiGetRequest = jest.fn((route) => {
    const sliceIndex = route.indexOf('/')+1;
    const searchTerm = route.slice(sliceIndex)
    const results = findResults(searchTerm);
    return results ? results : {error: `No results found for ${searchTerm}`};
});

describe('api helper functions', () => {
    test('GET /dog calls findResults with "dog"', () => {
        apiGetRequest('/dog');
        expect(findResults).toHaveBeenCalledWith('dog');
    });
})
