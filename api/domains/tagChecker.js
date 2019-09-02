const R = require('ramda');
const Joi = require('joi');

const { 
  REGEX_TAG_OPENING,
  REGEX_TAG_CLOSING,
  NOT_STRING,
  WILDCARD,
  OPENING_OR_CLOSING_REQUIRED
} = require('./constants');
const {
  processEvenTags,
  processTagsOpenLessThanClose,
  processTagsOpenGreaterThanClose,
  hasWildCard
} = require('./utils');

const tagStringSchema = Joi.object().keys({
  /**
   * Should only allow strings
   */
  str: Joi.string().required()
});

/**
 * Checks the tags in a string.
 *
 * @param {string} str
 * @returns {string} Correctly tagged paragraph | Expected </C> found </B>
 */
const checkTag = (str) => {
  let result;
  const validateString = Joi.validate({ str }, tagStringSchema);
  if (validateString.error) {
    return NOT_STRING;
  }

  const openingTags = str.match(REGEX_TAG_OPENING) ? str.match(REGEX_TAG_OPENING) : [WILDCARD];
  const closingTags = str.match(REGEX_TAG_CLOSING) ? str.match(REGEX_TAG_CLOSING) : [WILDCARD];

  if (openingTags[0] === WILDCARD && closingTags[0] === WILDCARD) {
    return OPENING_OR_CLOSING_REQUIRED;
  }

  /**
   * Combine 2 arrays into value pairs
   * ["<B>", "<C>"] ["</B>", "</C>"] => [["<B>", "</B>"], ["</C>", "</C>"]]
   */
  const pairTags = R.zip(openingTags, closingTags.reverse());


  if (hasWildCard(openingTags[0]) || openingTags.length < closingTags.length) {
    result = processTagsOpenLessThanClose(pairTags);
  } else if (hasWildCard(closingTags[0]) || openingTags.length > closingTags.length) {
    result = processTagsOpenGreaterThanClose(pairTags);
  } else {
    result = processEvenTags(pairTags);
  }
  
  return result
};

module.exports = {
  checkTag
};
