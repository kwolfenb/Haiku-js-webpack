export class Haiku{

  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2; 
    this.line3 = line3;
  }

  syllableCounter(line) {
    let syllables = 0;
    let lineArr = line.split(' ');
    for(let i = 0; i < lineArr.length; i++) {
      if(this.twoLetters(lineArr[i])==true) {
        syllables += 1;
      }

      else {
        if (this.hasPrefix(lineArr[i])==true) {
          syllables +=2;
        }
        if ((this.twoConsonants(lineArr[i])==true) && (this.endingE(lineArr[i])==false)) {
          syllables += 2;
        }
        if ((this.oneConsonants(lineArr[i])==true) && (this.endingE(lineArr[i])==false)) {
          syllables += 2;
        }
        if (this.endingE(lineArr[i])==true) {
          syllables += 1;
        }

        else if((!this.hasPrefix(lineArr[i])) && (!this.twoConsonants(lineArr[i])) && (!this.oneConsonants(lineArr[i])) && (!this.endingE(lineArr[i]))) {
          syllables +=1;
        }
      }


      console.log(syllables);
    }
    return syllables;
  }

  twoLetters(word) {
    let patt = /^[a-zA-Z]{1,2}$/g;
    let result = patt.test(word);
    return result;
  }

  hasPrefix(word) {
    let patt = /^pre|^un|^re|^im|^dis|^in|^dif|^em|^mis/g;
    let result = patt.test(word);
    return result;
  }
  twoConsonants(word) {
    let patt = /[aeiouy][bcdfghjklmnpqrstvwxz]{2,}[aeiouy]/g;
    let result = patt.test(word);
    return result;
  }

  oneConsonants(word) {
    let patt = /[aeiouy][bcdfghjklmnpqrstvwxz][aeiouy]/g;
    let result = patt.test(word);
    return result;
  }

  endingE(word) {
    let patt = /[aeiouy][bcdfghjklmnpqrstvwxz][e]$/g;
    let result = patt.test(word);
    return result;
  }

}
