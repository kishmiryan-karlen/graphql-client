const gql = require('graphql-tag');
const { userFragment } = require('./user.gql');

const allDocuments = gql`
  query documents {
    documents {
      id
      name
      user {
        ...UserFields
      }
    }
  }
  ${userFragment}
`;

module.exports = {
  allDocuments
};