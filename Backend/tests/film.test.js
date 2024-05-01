const app = require('../index'); // Assuming your Express app is exported from app.js
const Film = require('../models/filmModel');

// Configure Chai

describe('Film Controller', () => {
    let chai;
    let chaiHttp;
    before(async () => {
        chai = await import('chai');
        chaiHttp = await import('chai-http');
        chai.use(chaiHttp.default); // Initialize chai-http with Chai
    });
    // Test cases for createFilm method
    describe('POST /films', () => {
        it('should create a new film', async () => {
            const res = await chai.request(app)
                .post('/films')
                .send({ title: 'Test Film', director: 'Test Director', releaseYear: 2022 });

            expect(res).to.have.status(201);
            expect(res.body).to.be.an('object');
            expect(res.body.title).to.equal('Test Film');
            expect(res.body.director).to.equal('Test Director');
            expect(res.body.releaseYear).to.equal(2022);
        });

        it('should return 400 if required fields are missing', async () => {
            const res = await chai.request(app)
                .post('/films')
                .send({});

            expect(res).to.have.status(400);
            expect(res.body).to.be.an('object');
            expect(res.body.message).to.equal('Path `title` is required., Path `director` is required., Path `releaseYear` is required.');
        });

        // Add more test cases for createFilm method as needed
    });

    // Test cases for other controller methods (getFilmById, updateFilm, etc.)
    describe('GET /films/:id', () => {
        it('should return a film with the given ID', async () => {
            // Assuming you have a film with ID '123' in your database
            const res = await chai.request(app).get('/films/123');
    
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('title', 'Example Film');
            expect(res.body).to.have.property('director', 'Example Director');
            // Add more assertions based on your expected film properties
        });
    
        it('should return 404 if the film ID does not exist', async () => {
            // Assuming there's no film with ID '999' in your database
            const res = await chai.request(app).get('/films/999');
    
            expect(res).to.have.status(404);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('error', 'Film not found');
            // Add more assertions based on your error response
        });
    
        it('should return 400 if the provided ID is not a valid ObjectId', async () => {
            // Passing an invalid film ID (not a valid ObjectId)
            const res = await chai.request(app).get('/films/invalid_id');
    
            expect(res).to.have.status(400);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('error', 'Invalid film ID');
            // Add more assertions based on your error response
        });
    });

    describe('PUT /films/:id', () => {
        it('should update a film with the given ID', async () => {
            // Assuming you have a film with ID '123' in your database
            const updatedData = { title: 'Updated Film Title' };
            const res = await chai.request(app)
                .put('/films/123')
                .send(updatedData);
    
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('title', updatedData.title);
            // Add more assertions based on your expected film properties after update
        });
    
        it('should return 404 if the film ID does not exist', async () => {
            // Assuming there's no film with ID '999' in your database
            const updatedData = { title: 'Updated Film Title' };
            const res = await chai.request(app)
                .put('/films/999')
                .send(updatedData);
    
            expect(res).to.have.status(404);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('error', 'Film not found');
            // Add more assertions based on your error response
        });
    
        it('should return 400 if the provided ID is not a valid ObjectId', async () => {
            // Passing an invalid film ID (not a valid ObjectId)
            const updatedData = { title: 'Updated Film Title' };
            const res = await chai.request(app)
                .put('/films/invalid_id')
                .send(updatedData);
    
            expect(res).to.have.status(400);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('error', 'Invalid film ID');
            // Add more assertions based on your error response
        });
    
        it('should return 400 if required fields are missing in the request body', async () => {
            // Assuming you're missing the 'title' field in the request body
            const updatedData = { director: 'Updated Director' };
            const res = await chai.request(app)
                .put('/films/123')
                .send(updatedData);
    
            expect(res).to.have.status(400);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('error', 'Missing required field(s)');
            // Add more assertions based on your error response
        });
    });

});