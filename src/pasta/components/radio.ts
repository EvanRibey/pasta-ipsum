import { MDCFormField } from '@material/form-field';
import { MDCRadio } from '@material/radio';

export class Radio {
  elem: MDCRadio;

  constructor(id: string) {
    const elem = (<Element>document.getElementById(id));
    const radioElem = (<Element>document.querySelector(`#${id} .mdc-radio`));

    if (!elem && !radioElem) throw new Error('cannot bind elements');
    const radio = new MDCRadio(elem);
    const formField = new MDCFormField(radioElem);
    formField.input = radio;

    this.elem = radio;
  }

  value(): boolean {
    return this.elem.checked;
  }
}
