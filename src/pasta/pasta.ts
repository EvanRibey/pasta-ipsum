import './pasta.css';
import { Form } from './components/form';

const app = document.querySelector<HTMLDivElement>('#app')!

export function init() {
  app.innerHTML = `
    ${app.innerHTML}
    <form class="generator">
      <label class="mdc-text-field mdc-text-field--filled generator__input" id="amount">
        <span class="mdc-text-field__ripple"></span>
        <span class="mdc-floating-label" id="amount-label">Amount</span>
        <input class="mdc-text-field__input" type="number" min="1" max="20" aria-labelledby="amount-label" required>
        <span class="mdc-line-ripple"></span>
      </label>
      <div class="mdc-form-field" id="sentence-type">
        <div class="mdc-radio">
          <input class="mdc-radio__native-control" type="radio" id="sentences" name="radios" value="sentences" checked>
          <div class="mdc-radio__background">
            <div class="mdc-radio__outer-circle"></div>
            <div class="mdc-radio__inner-circle"></div>
          </div>
          <div class="mdc-radio__ripple"></div>
        </div>
        <label for="sentences">Sentences</label>
      </div>
      <div class="mdc-form-field generator__input">
        <div class="mdc-radio">
          <input class="mdc-radio__native-control" type="radio" id="paragraph" name="radios" value="paragraphs">
          <div class="mdc-radio__background">
            <div class="mdc-radio__outer-circle"></div>
            <div class="mdc-radio__inner-circle"></div>
          </div>
          <div class="mdc-radio__ripple"></div>
        </div>
        <label for="paragraph">Paragraphs</label>
      </div>
      <div class="mdc-form-field generator__input" id="ipsum">
        <div class="mdc-checkbox">
          <input type="checkbox"
                 class="mdc-checkbox__native-control"
                 id="starts-with"/>
          <div class="mdc-checkbox__background">
            <svg class="mdc-checkbox__checkmark"
                 viewBox="0 0 24 24">
              <path class="mdc-checkbox__checkmark-path"
                    fill="none"
                    d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
            </svg>
            <div class="mdc-checkbox__mixedmark"></div>
          </div>
          <div class="mdc-checkbox__ripple"></div>
        </div>
        <label for="starts-with">Start with "Pasta ipsum dolor sit amet&#8230;"</label>
      </div>
      <button class="mdc-button mdc-button--raised">
        <span class="mdc-button__ripple"></span>
        <span class="mdc-button__label">Generate</span>
      </button>
    </form>
    <div class="generator-result generator-result--hidden"></div>
  `;

  new Form();
}
