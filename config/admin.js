module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '88519cd091b094c7dab8623f63ffad9a'),
  },
});
