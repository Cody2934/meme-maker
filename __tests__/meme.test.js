// const { getMeme, getAgent } = require('../db/data-helpers');
const request = require('supertest');
const app = require('../lib/app');

describe('meme routes', () => {
  ('it creates a meme', () => {
    return request(app)
      .post('/api/v1/memes')
      .send({
        top: '',
        image: '',
        bottom: ''
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          top: '',
          image: '',
          bottom: '',
          __v: 0
        });
      });
  });


});
