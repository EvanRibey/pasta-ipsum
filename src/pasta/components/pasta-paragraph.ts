import pastaList from '../json/pasta-list.json';

export class PastaParagraph {
  pastaLength = pastaList.length;
  maxWordsSentenceLength = this.pastaLength; // should be 20
  minWordsSentenceLength = 8;
  maxSentencesParagraphLength = 8;
  minSentencesParagraphLength = 3;

  minMaxRand(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  randomNumber(): number {
    return Math.floor(Math.random() * this.pastaLength);
  }
  
  spaceReducer(accum: string, current: string, index: number): string {
    if (index === 0) current;
    return `${accum} ${current}`;
  }

  word(): string {
    return pastaList[this.randomNumber()];
  }

  wordList(numWords: number): string[] {
    const wordList: string[] = [];
    let counter = 0;
    while(counter < numWords) {
      let randomWord = this.word();
      while(wordList.includes(randomWord)) {
        randomWord = this.word();
      }
      wordList.push(randomWord);

      counter++;
    }

    return wordList;
  }

  ipsumSentence(): string {
    const base = 'Pasta ipsum dolor sit amet,';
    const sentenceLength = this.minMaxRand(this.minWordsSentenceLength, this.maxWordsSentenceLength - 5);
    const listWords = this.wordList(sentenceLength);
    const endString = listWords.reduce((accum, current, index) => this.spaceReducer(accum, current, index));
    return `${base} ${endString}.`;
  }

  sentence(ipsum = false, words: number | null = null): string {
    if (ipsum) return this.ipsumSentence();

    let numWords = 0;
    if (!words) {
      numWords = this.minMaxRand(this.minWordsSentenceLength, this.maxWordsSentenceLength);
    } else {
      numWords = words;
    }

    const listWords = this.wordList(numWords);
    const firstWord = listWords[0];
    listWords[0] = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);

    const sentence = listWords.reduce((accum, current, index) => this.spaceReducer(accum, current, index));

    return `${sentence}.`;
  }

  paragraph(ipsum = false, sentences: number | null = null): string {
    let numSentences = 0;
    if (!sentences) {
      numSentences = this.minMaxRand(this.minSentencesParagraphLength, this.maxSentencesParagraphLength);
    } else {
      numSentences = sentences;
    }

    const listSentences: string[] = [];
    if (ipsum) {
      listSentences.push(this.ipsumSentence());
      numSentences--;
    }

    let counter = 0;
    while(counter < numSentences) {
      listSentences.push(this.sentence());
      counter++;
    }

    const paragraph = listSentences.reduce((accum, current, index) => this.spaceReducer(accum, current, index));
    return paragraph;
  }
}
