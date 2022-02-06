import { MDCFormField } from '@material/form-field';
import { MDCCheckbox } from '@material/checkbox';

export class Checkbox {
  elem: MDCCheckbox;

  constructor(id: string) {
    const elem = (<Element>document.getElementById(id));
    const checkboxElem = (<Element>document.querySelector(`#${id} .mdc-checkbox`));

    if (!elem && !checkboxElem) throw new Error('cannot bind elements');
    const checkbox = new MDCCheckbox(elem);
    const formField = new MDCFormField(checkboxElem);
    formField.input = checkbox;

    this.elem = checkbox;
  }

  value(): boolean {
    return this.elem.checked;
  }
}
