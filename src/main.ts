import './style.css'
import { init } from './pasta/pasta';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Pasta Ipsum Generator</h1>
`
init();
