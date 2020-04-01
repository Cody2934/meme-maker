const Meme = require('../lib/models/Meme');
const chance = require('chance').Chance();

module.exports = async({ memesToCreate = 5 } = {}) => {
  const top = ['guess what', 'knock knock', 'look at the bottom'];
  const image = ['placekitten', 'placecage', 'placechucknorris'];
  const bottom = ['no', 'why', 'go away'];

  // eslint-disable-next-line no-unused-vars
  const memes = await Meme.create([...Array(memesToCreate)].map(() => ({
    top: chance.pickone(top),
    image: chance.pickone(image),
    bottom: chance.pickone(bottom)
  })));
};
