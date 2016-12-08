import { h, Component } from 'skatejs';
import styles from './Demo.scss';
import { Alert } from '../Alert';

export class Demo extends Component {
  static get is() { return 'bl-alert-demo' }

  renderCallback() {
    return [
      <style>{styles}</style>,
      <div>
        <Alert>Alert default</Alert>
        <Alert color="brand">Alert brand</Alert>
        <Alert color="warning">Alert warning</Alert>
        <Alert color="info">Alert info</Alert>
        <Alert color="success">Alert success</Alert>
        <Alert color="error">Alert error</Alert>
      </div>
    ]
  }
}

customElements.define( Demo.is, Demo );
