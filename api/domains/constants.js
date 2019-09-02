
const REGEX_TAG_OPENING = /<[A-Z]i*>/g;
const REGEX_TAG_CLOSING = /<\/[A-Z]i*>/g;
const REGEX_PICK_CHAR = /[A-Z]/g;
const WILDCARD = '#';
const CORRECTLY_TAGGED = 'Correctly tagged paragraph';
const NOT_STRING = 'Input is not a string';
const OPENING_OR_CLOSING_REQUIRED = 'There should be atleast 1 valid opening or closing tag';
const UNCORRECTLY_TAGGED = ( expected, found ) => `Expected ${expected} found ${found}`;

module.exports = {
  REGEX_TAG_OPENING,
  REGEX_TAG_CLOSING,
  CORRECTLY_TAGGED,
  REGEX_PICK_CHAR,
  WILDCARD,
  NOT_STRING,
  OPENING_OR_CLOSING_REQUIRED,
  UNCORRECTLY_TAGGED
};