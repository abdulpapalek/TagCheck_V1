const {
  REGEX_PICK_CHAR,
  CORRECTLY_TAGGED,
  UNCORRECTLY_TAGGED,
  WILDCARD
} = require('./constants');

/**
 * Process the tags with even opening and closing tags
 * @param {array} pairTags
 * @return {string} Correctly tagged paragraph
 */
const processEvenTags = (pairTags) => {
  let result;
  if (pairTags.length === 0) return CORRECTLY_TAGGED;
  const resultMap = pairTags.map(
    (pair) => pair[0].match(REGEX_PICK_CHAR)[0] === pair[1].match(REGEX_PICK_CHAR)[0]
  );
  const lastIndex = resultMap.lastIndexOf(false);
  if (lastIndex === -1) {
    result = CORRECTLY_TAGGED;
  } else {
    const expectedChar = pairTags[lastIndex][0].match(REGEX_PICK_CHAR);
    const foundChar = pairTags[lastIndex][1];
    result = UNCORRECTLY_TAGGED(`</${expectedChar}>`, foundChar);
  }

  return result;
};

/**
 * Process the tags with opening tags less than closing tags
 * @param {array} pairTags
 * @return {string} Expected # found </B>
 */
const processTagsOpenLessThanClose = (pairTags) => {
  const lastIndex = pairTags.length - 1;
  return UNCORRECTLY_TAGGED(WILDCARD, pairTags[lastIndex][1]);
};

/**
 * Process the tags with opening tags less than closing tags
 * @param {array} pairTags
 * @return {string} Expected </B> found #
 */
const processTagsOpenGreaterThanClose = (pairTags) => {
  const lastIndex = pairTags.length - 1;
  const expectedChar = pairTags[lastIndex][0].match(REGEX_PICK_CHAR);
  return UNCORRECTLY_TAGGED(`</${expectedChar}>`, WILDCARD);
};

const hasWildCard = char => WILDCARD === char;

module.exports = {
  processEvenTags,
  processTagsOpenLessThanClose,
  processTagsOpenGreaterThanClose,
  hasWildCard
};