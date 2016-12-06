import { h, Component, prop } from 'skatejs';
import { Modal } from '../Modal';
import { Button } from '../../button/Button';

import styles from './Demo.scss';

export class Demo extends Component {
  static get is() { return 'bl-modal-demo' }
  static get props(){
    return {
      isModalOpen: prop.boolean()
    }
  }

  isModalOpen = false;

  toggleModal(){
    console.log( 'toggleModal' );
    this.isModalOpen = !this.isModalOpen
  }
  connectedCallback(){
    super.connectedCallback();
    this.toggleModal = this.toggleModal.bind(this);
  }

  renderCallback() {
    const {isModalOpen} = this;
    return [
      <style>{styles}</style>,
      <Button type="info" onClick={this.toggleModal}>Open Modal</Button>,
      <Modal isOpen={isModalOpen} onModalClose={this.toggleModal} closeTitle="Close NOW">
        <span slot="title">Modal <em>heading</em></span>
        <span>
          This is the modal body
          <input type="text"/>
        </span>
        <span slot="footer">
          <Button onClick={this.toggleModal} type="brand">Close</Button>
        </span>
      </Modal>
    ]
  }
}

customElements.define( Demo.is, Demo );
