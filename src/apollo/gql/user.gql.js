const gql = require('graphql-tag');

const userById = gql`
  query user($userId: ID!) {
    user: user(id: $userId) {
      id
      username
      email
    }
  }
`;

module.exports = {
  userById
};