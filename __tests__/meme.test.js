const { getMeme, getMemes } = require('../db/data-helpers');
const request = require('supertest');
const app = require('../lib/app');

describe('meme routes', () => {
  it('creates a meme', () => {
    return request(app)
      .post('/api/v1/memes')
      .send({
        top: 'this is the top',
        image: 'placekitten',
        bottom: 'this is the bottom'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          top: 'this is the top',
          image: 'placekitten',
          bottom: 'this is the bottom',
          __v: 0
        });
      });
  });
    

  it('gets a tweet by id', async() => {
    const meme = await getMeme();
    return request(app)
      .get(`/api/v1/memes/${meme._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...meme,
        });
      });
  });

  it('gets all memes', async() => {
    const memes = await getMemes();
    return request(app)
      .get('/api/v1/memes')
      .then(res => {
        expect(res.body).toEqual(memes);
      });
  });

  it('updates a meme by id', async() => {
    const meme = await getMeme();
    return request(app)
      .patch(`/api/v1/memes/${meme._id}`)
      .send({ top: 'update test' })
      .then(res => {
        expect(res.body).toEqual({
          ...meme,
        });
      });
  });

  it('deletes a meme by id', async() => {
    const meme = await getMeme();
    return request(app)
      .delete(`/api/v1/memes/${meme._id}`)
      .then(res => {
        expect(res.body).toEqual(meme);
      });
  });
});


