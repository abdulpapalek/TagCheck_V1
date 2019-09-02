const express = require('express');

const router = express.Router();
const { checkTag } = require('./../domains/tagChecker');

router.post('/check-tag', (req, res) => {
  const result = checkTag(req.body.htmlStr);
  res.send(result);
});

module.exports = router;
