import { MDCRipple } from '@material/ripple';
import { Input } from './input';
import { Radio } from './radio';
import { Checkbox } from './checkbox';
import { PastaParagraph } from './pasta-paragraph';

export class Form {
  quantity: Input;
  sentenceType: Radio;
  ipsum: Checkbox;
  result: HTMLDivElement;
  pastaGenerator: PastaParagraph;

  constructor() {
    const form = document.querySelector('form.generator');
    if (!form) throw new Error('no form to bind');
    form.addEventListener('submit', event => this.submit(event));

    const resultDiv = <HTMLDivElement>document.querySelector('div.generator-result');
    if (!resultDiv) throw new Error('no result div to bind');

    this.result = resultDiv;
    this.quantity = new Input('amount'); 
    this.sentenceType = new Radio('sentence-type');
    this.ipsum = new Checkbox('ipsum');
    this.pastaGenerator = new PastaParagraph();

    this.bindMDC();
  }

  bindMDC() {
    const button = document.querySelector('form.generator button');
    if (!button) throw new Error('no button to bind');
    new MDCRipple(button);
  }

  showResult(): void {
    this.result.classList.remove('generator-result--hidden');
  }

  submit(event: Event): void {
    event.preventDefault();

    let amount = this.quantity.value();
    let paragraphs: string[] = [];

    if (this.sentenceType.value()) {
      paragraphs.push(
        this.pastaGenerator.paragraph(this.ipsum.value(), amount),
      );
    } else {
      let isIpsum = this.ipsum.value();
      let counter = 0;
      while(counter < amount) {
        paragraphs.push(
          this.pastaGenerator.paragraph(false),
        );
        isIpsum = isIpsum && false;
        counter++;
      }
    }

    this.result.innerHTML = paragraphs.reduce(
      (accum, current) => `${accum}<p>${current}</p>`,
      '',
    );

    this.showResult();
  }
}
