import pastaList from '../json/pasta-list.json';
import { minMaxRand } from '../../shared/components/min-max-rand';
import { spaceReducer } from '../../shared/components/space-reducer';

export class PastaParagraph {
  pastaLength = pastaList.length;
  maxWordsSentenceLength = 20;
  minWordsSentenceLength = 8;
  maxSentencesParagraphLength = 8;
  minSentencesParagraphLength = 3;

  randomNumber(): number {
    return Math.floor(Math.random() * this.pastaLength);
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
    const sentenceLength = minMaxRand(this.minWordsSentenceLength, this.maxWordsSentenceLength - 5);
    const listWords = this.wordList(sentenceLength);
    const endString = listWords.reduce((accum, current, index) => spaceReducer(accum, current, index));
    return `${base} ${endString}.`;
  }

  sentence(ipsum = false, words: number | null = null): string {
    if (ipsum) return this.ipsumSentence();

    let numWords = 0;
    if (!words) {
      numWords = minMaxRand(this.minWordsSentenceLength, this.maxWordsSentenceLength);
    } else {
      numWords = words;
    }

    const listWords = this.wordList(numWords);
    const firstWord = listWords[0];
    listWords[0] = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);

    const sentence = listWords.reduce((accum, current, index) => spaceReducer(accum, current, index));

    return `${sentence}.`;
  }

  paragraph(ipsum = false, sentences:number|null=null): string {
    let numSentences = 0;
    if (!sentences) {
      numSentences = minMaxRand(this.minSentencesParagraphLength, this.maxSentencesParagraphLength);
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

    const paragraph = listSentences.reduce((accum, current, index) => spaceReducer(accum, current, index));
    return paragraph;
  }
}
