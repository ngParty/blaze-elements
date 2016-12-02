import './style.css';

import './elements/index'

const mountPoint = document.getElementById('app');

const components = [
  'button',
  'toggle',
  'modal',
  'tooltip'
];

const componentsMarkup = components.map(( componentName ) => {
  return `
    <fieldset>
      <legend style="text-transform: capitalize;">${componentName}</legend>
      <bl-${componentName}-demo></bl-${componentName}-demo> 
    </fieldset>
  `;
});

const App = () => (`
  <section>
    <h1>Blaze WC elements catalogue</h1>
    ${ componentsMarkup.join( '' ) }
  </section>
`);

render(App, mountPoint);


function render(rootElement: Function, mountPoint: HTMLElement) {
  mountPoint.innerHTML = App();
}
