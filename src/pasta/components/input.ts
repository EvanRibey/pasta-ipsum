import { MDCTextField } from '@material/textfield';

export class Input {
  elem: MDCTextField;

  constructor(id: string) {
    if (!id) throw new Error('No id provided');

    const elem = (<Element>document.getElementById(id));
    if (!elem) throw new Error('No elem to bind');
    this.elem = new MDCTextField(elem);
  }

  value(): number {
    return parseInt(this.elem.value);
  }
}
