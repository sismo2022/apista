module.exports = ({ env }) => ({
  url: env('https://apista2.herokuapp.com'),
  proxy: true,
  app: {
      keys: env.array('APP_KEYS', ['testKey1', 'testKey2']),
  },
});
