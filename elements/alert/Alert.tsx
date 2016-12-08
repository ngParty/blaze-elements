import { h, Component, prop } from 'skatejs';
import styles from './Alert.scss';
import { css } from '../../utils/css';

const AlertColors = {
  brand: 'brand',
  info: 'info',
  warning: 'warning',
  success: 'success',
  error: 'error',
};

type AlertColorsType = typeof AlertColors;

// public
interface AlertProps extends JSX.HTMLProps<HTMLElement | Alert> {
  color?: keyof AlertColorsType
}

export class Alert extends Component {
  _props: AlertProps;
  static get is() { return 'bl-alert' }
  static get props() {
    return {
      color: prop.string()
    }
  }

  color: string;

  renderCallback() {
    const { color } = this;
    const className = css(
      'c-alert',{
        'c-alert--brand': color === AlertColors.brand,
        'c-alert--info': color === AlertColors.info,
        'c-alert--warning': color === AlertColors.warning,
        'c-alert--success': color === AlertColors.success,
        'c-alert--error': color === AlertColors.error,
      }
    );

    return [
      <style>{styles}</style>,
      <div className={className}>
        <button className="c-button c-button--close">×</button>
        <slot />
      </div>
    ]
  }

}

customElements.define( Alert.is, Alert );
