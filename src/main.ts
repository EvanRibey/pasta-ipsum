import './style.css'
import { init } from './pasta/pasta';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Pasta Ipsum Generator</h1>
  <p>A small application that generates pasta styled lorum ipsum text to use for templated copy. Choices can be made to how many sentences or paragraphs to create and if it the first sentence should start with a "Lorum ipsum" styled sentence.</p>
`
init();
