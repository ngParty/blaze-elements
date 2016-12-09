import { h, Component, prop, emit } from 'skatejs';
import styles from './Button.scss';
import { css } from '../../utils/css';

// public
interface ButtonProps extends JSX.HTMLProps<HTMLButtonElement | HTMLAnchorElement | Button> {
  disabled?: boolean,
  type?: string,
}

const ButtonTypes = {
  brand: 'brand',
  info: 'info',
  warning: 'warning',
  success: 'success',
  error: 'error',
  close: 'close'
};

export class Button extends Component {
  _props: ButtonProps;
  static get is(){ return 'bl-button' }
  static get props() {
    return {
      disabled: prop.boolean( {
        attribute: true
      } ),
      type: prop.string({
        attribute: true
      })
    }
  }

  disabled: boolean;
  type = '';

  renderCallback() {
    const {type} = this;
    const className = css(
      'c-button',
      {
        'c-button--brand': type === ButtonTypes.brand,
        'c-button--info': type === ButtonTypes.info,
        'c-button--success': type === ButtonTypes.success,
        'c-button--warning': type === ButtonTypes.warning,
        'c-button--error': type === ButtonTypes.error,
        'c-button--close': type === ButtonTypes.close,
      }
    );
    return [
      <style>{styles}</style>,
      <button
        className={className}
        disabled={this.disabled}
      >
        <slot/>
      </button>
    ]
  }
}

customElements.define( Button.is, Button );
