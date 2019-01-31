const userGql = require('./user.gql');
const documentGql = require('./document.gql');

module.exports = {
  ...userGql,
  ...documentGql,
};