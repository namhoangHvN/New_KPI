module.exports = {
  db: process.env.db || 'localhost:27017',
  clientSecret: process.env.clientSecret || '8f6a4610e1de47fca204374762fb9ead',
  tokenSecret: process.env.tokenSecret || '574c908723c442e9b3e8cab8c3b83ed5'
};