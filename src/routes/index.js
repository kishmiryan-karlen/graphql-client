const express = require('express');
const router = express.Router();
const apollo = require('../apollo');
const { userById } = require('../apollo/gql');

router.get('/', function(req, res, next) {
  res.json({ hello: 'world' });
});

router.get('/users', async function(req, res, next) {
  const { id } = req.query;

  try {
    const { data } = await apollo.query({
      query: userById,
      variables: {
        userId: id,
      }
    });
    
    res.json(data);
  } catch (err) {
    console.log('\x1b[31m>>> err \x1b[31m', err);
    res.json({ success: false });
  }

})

module.exports = router;
