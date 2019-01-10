import { Haiku } from '../src/haiku.js';
describe('Haiku', function() {
  var reusableHaiku;

  beforeEach(function() {
    
    let line1 = "Green and speckled legs";
    let line2 = "Hop on logs and lily pads";
    let line3 = "Splash in cool water";
    reusableHaiku = new Haiku(line1, line2, line3);
  })

  
    
  it('should return true if word contains 1 or 2 letters, otherwise returns false', function() {
    let str = "speckled";
    let result = reusableHaiku.twoLetters(str);
    console.log(result);
    expect(result).toEqual(true);
  });
  it('should return true if word starts with a prefix, otherwise returns false', function() {
    let str = "speckled";
    let result = reusableHaiku.hasPrefix(str);
    console.log(result);
    expect(result).toEqual(true);
  });

  it('should return true if word contains 2 consonants in a row, otherwise false', function() {
    let str = "speckled";
    let result = reusableHaiku.twoConsonants(str);
    console.log(result);
    expect(result).toEqual(true);
  });

  it('should return true if word contains 1 consonants in a row, otherwise false', function() {
    let str = "speckled";
    let result = reusableHaiku.oneConsonants(str);
    console.log(result);
    expect(result).toEqual(true);
  });

  it('should return true if word ends in silent "E", otherwise false', function() {
    let str = "speckled";
    let result = reusableHaiku.endingE(str);
    console.log(result);
    expect(result).toEqual(true);
  });
  it('should return true if word ends in silent "ES", otherwise false', function() {
    let str = "speckled";
    let result = reusableHaiku.endingE(str);
    console.log(result);
    expect(result).toEqual(true);
  });
  it('should return true if word ends in silent "ED" otherwise false', function() {
    let str = "speckled";
    let result = reusableHaiku.endingE(str);
    console.log(result);
    expect(result).toEqual(true);
  });

});