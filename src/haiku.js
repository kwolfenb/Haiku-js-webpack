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
      let thisWord = lineArr[i].toLowerCase();

      if (thisWord=="") {
        syllables=0;
      }
      else if(this.twoLetters(thisWord)==true) {
        syllables += 1;
      }
      else {
        if (this.hasPrefix(thisWord)==true) {
          syllables +=2;
        }
        if ((this.twoConsonants(thisWord)==true) && (this.oneConsonants(thisWord)==true)) {
          syllables += 3;
        }
        if ((this.oneConsonants(thisWord)==true) && (this.twoConsonants(thisWord) ==false)) {
          syllables += 2;
        }
        if ((this.twoConsonants(thisWord)==true) && (this.oneConsonants(thisWord) ==false)) {
          syllables += 2;
        }
        // if (this.endingE(thisWord)==true) {
        //   syllables += 1;
        // }

        else if((!this.hasPrefix(thisWord)) && (!this.twoConsonants(thisWord)) && (!this.oneConsonants(thisWord))) {
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
    let patt = /[aeiouy][bcdfghjklmnpqrstvwxz][aeiouy][a-rt-z]/g;
    let patt2 = /[aeiouy][bcdfghjklmnpqrstvwxz][aiouy]$/g;
    let result = ((patt.test(word)==true) || (patt2.test(word)));
    return result;
  }

  endingE(word) {
    let patt = /[aeiouy][bcdfghjklmnpqrstvwxz]{1,}[e]$/g;
    let patt2 = /[aeiouy][bcdfghjklmnpqrstvwxz]{1,}[e][sd]$/g;
    let result = ((patt.test(word)) || (patt2.test(word)));
    return result;
  }
}