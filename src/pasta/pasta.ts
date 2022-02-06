import { PastaParagraph } from './components/pasta-paragraph';

const app = document.querySelector<HTMLDivElement>('#app')!

export function init() {
  const pasta = new PastaParagraph();

  app.innerHTML = `
    ${app.innerHTML}
    <form class="generator">
      <input type="number">
      <button>Generate</button>
    </form>
  `;
}
