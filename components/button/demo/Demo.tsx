import { h, Component } from 'skatejs';
import { Button } from '../Button';

import styles from './Demo.scss';

export class Demo extends Component {
  static get is() { return 'bl-button-demo'}

  renderCallback() {
    return [
      <style></style>,
      <div>
        <Button
          disabled
          type="brand"
        >Click me</Button>
        <Button
          type="brand"
        >Click me</Button>
      </div>
    ]
  }
}


customElements.define( Demo.is, Demo );
