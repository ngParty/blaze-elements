import { h, Component } from 'skatejs';
import styles from './Demo.scss';
import { Input } from '../Input';

export class Demo extends Component {
  static get is() { return 'bl-input-demo' }

  renderCallback() {
    return [
      <style>{styles}</style>,
      <div>
        <Input valid="false" value="error state"
               placeholder="placeholder"
               onKeyup={() => { console.log("onKeyUp")}}
               onFocus={() => { console.log("onFocus")}}
               onBlur={() => { console.log("onBlur")}}
               onChange={() => { console.log("onChange")}}
        ></Input>
        <Input valid="true" value="success state"
               onChange={() => { console.log("onChange")}}
               inputSize="xlarge"
        ></Input>
        <Input value="default state"
               onChange={() => { console.log("onChange")}}
               inputSize="super"
        ></Input>
        <Input value="disabled state"
               disabled
               inputSize="xsmall"
        ></Input>
        <Input value="password"
               type="password"
        ></Input>
        <Input value=""
               type="number"
        ></Input>
      </div>
    ]
  }
}

customElements.define( Demo.is, Demo );
