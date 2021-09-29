const request = require('supertest');
const app = require('../assets/server');

describe('api routes', () => {
    let api;
    beforeAll(() => {
        api = app.listen(5000, () => {
            console.log(`Test API running on port 5000`)
        });
    });
    afterAll((done) => {
        console.log('Gracefully stopping test server');
        api.close(done);
    });

    test('GET /dog returns 10 results for "dog"', (done) => {
        request(api)
            .get('/dog')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(res => res.body.length === 10)
            .expect(200, done);
    });

    test('GET /:search returns "no results found" message if no search results', (done) => {
        request(api)
            .get('/dragon')
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(res => res.body.error === "No results found for dragon")
            .expect(404, done);
    });

    test('GET /dog_supplies returns matching results', (done) => {
        request(api)
            .get('/dog_supplies')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(res => {
                const firstResult = res.body[0].bodyText;
                return firstResult.includes('dog') && firstResult.includes('supplies')
            })
            .expect(200, done);
    });

    test('GET /cat/random returns a random result for "cat"', (done) => {
        request(api)
            .get('/cat/random')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(res => res.body.length === 1)
            .expect(200, done)
    });

})