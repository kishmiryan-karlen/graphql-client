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

const userFragment = gql`
  fragment UserFields on User {
    username
    email
    age
  }
`;

module.exports = {
  userById,
  userFragment
};