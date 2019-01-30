const fetch = require('node-fetch');
const { ApolloClient } = require('apollo-client');
const { HttpLink } = require('apollo-link-http');
const { InMemoryCache } = require('apollo-cache-inmemory');

module.exports = new ApolloClient({
  link: new HttpLink({
    uri: `http://localhost:3000/`,
    fetch,
  }),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});
