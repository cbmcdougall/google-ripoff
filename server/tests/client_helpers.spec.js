/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../../client/index.html'), 'utf8');
let helpers
global.fetch = require('jest-fetch-mock');



describe('getSearchResult helper', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        helpers = require('../../client/static/js/index');
        jest.mock('../../client/static/js/index', () => {
            const originalModule = jest.requireActual('../../client/static/js/index');
            return { 
                ...originalModule,
                noResults: jest.fn() 
            };
        })
        fetch.resetMocks();
    })
    
    test('it makes a fetch call to the server', async () => {
        fetch.mockResponse(JSON.stringify({error: "No results found"}));
        await helpers.getSearchResult();
        expect(fetch).toHaveBeenCalled();
    });
    
    test('it calls noResults to display no results found', async () => {
        fetch.mockResponse(JSON.stringify({error: "No results found"}));
        await helpers.getSearchResult();
        expect(helpers.noResults).toHaveBeenCalled();
    });

    // test('it hides the original logo and displays the small logo', async () => {
    //     fetch.mockResponse(JSON.stringify([]));
    //     await helpers.getSearchResult();
    //     expect(logo.className).toBe('hide');
    //     expect(smallLogo).toBeDefined();
    // });

    // test('it renders the retrieved search result', async () => {
    //     const data = [{"link": "https://en.wikipedia.org/wiki/Dog", "header": "Dog - Wikipedia", "bodyText": "The dog or domestic dog is a domesticated descendant of the grey wolf. It has many notable characteristics, the most prominent of which is the upturning tail."}];
    //     const searchResults = document.getElementById('results');
    //     fetch.mockResponse(JSON.stringify(data));
    //     await helpers.getSearchResult();
    //     expect(searchResults.innerHTML).toBe(`
    //         <a href="${data.link}">${data.header}</a>
    //         <p>${data.bodyText}</p>
    //     `)
    // });

});