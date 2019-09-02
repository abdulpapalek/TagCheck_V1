const { expect } = require('chai');
const {
  NOT_STRING,
  CORRECTLY_TAGGED,
  OPENING_OR_CLOSING_REQUIRED
} = require('./constants');
const { checkTag } = require('./tagChecker');

describe('tagChecker', () => {

  it('will return "Correctly tagged paragraph" if the paragraph is "<B>This is a sentence in boldface</B>"', () => {
    const input = '<B>This is a sentence in boldface</B>';
    result = checkTag(input);
    expect(result).to.equal(CORRECTLY_TAGGED);
  });

  it('will return "Correctly tagged paragraph" if the paragraph is "The following text<C><B>is centred and in boldface</B></C>"', () => {
    const input = 'The following text<C><B>is centred and in boldface</B></C>';
    result = checkTag(input);
    expect(result).to.equal(CORRECTLY_TAGGED);
  });

  it('will return "Correctly tagged paragraph" if the paragraph is "<B>This <\g>is <B>boldface</B> in <<*> a</B> <\6> <<d>sentence"', () => {
    const input = '<B>This <\g>is <B>boldface</B> in <<*> a</B> <\6> <<d>sentence';
    result = checkTag(input);
    expect(result).to.equal(CORRECTLY_TAGGED);
  });

  it('will return "Expected </C> found </B>" if the paragraph is "<B><C> This should be centred and in boldface, but the tags are wrongly nested </B></C>"', () => {
    const input = '<B><C> This should be centred and in boldface, but the tags are wrongly nested </B></C>';
    result = checkTag(input);
    expect(result).to.equal('Expected </C> found </B>');
  });

  it('will return "Expected # found </C>" if the paragraph is "<B>This should be in boldface, but there is an extra closing tag</B></C>"', () => {
    const input = '<B>This should be in boldface, but there is an extra closing tag</B></C>';
    result = checkTag(input);
    expect(result).to.equal('Expected # found </C>');
  });

  it('will return "Expected </B> found #" if the paragraph is "<B><C>This should be centred and in boldface, but there is a missing closing tag</C>"', () => {
    const input = '<B><C>This should be centred and in boldface, but there is a missing closing tag</C>';
    result = checkTag(input);
    expect(result).to.equal('Expected </B> found #');
  });

  it('will return "Input is not a string" if the paragraph is not a string', () => {
    const input = 312312312;
    result = checkTag(input);
    expect(result).to.equal(NOT_STRING);
  });

  it('will return "There should be atleast 1 valid opening or closing tag" if the paragraph does not contain an opening or closing tag', () => {
    const input = '312312312';
    result = checkTag(input);
    expect(result).to.equal(OPENING_OR_CLOSING_REQUIRED);
  });

  it('will return "Expected </B> found #" if the paragraph is "<B>312312312"', () => {
    const input = '<B>312312312';
    result = checkTag(input);
    expect(result).to.equal('Expected </B> found #');
  });

  it('will return "Expected # found </B>" if the paragraph is "</B>312312312"', () => {
    const input = '</B>312312312';
    result = checkTag(input);
    expect(result).to.equal('Expected # found </B>');
  });
});
