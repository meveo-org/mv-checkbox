import { LitElement, html, css } from "lit-element";
import "./mv-checkbox.js";

export class MvCheckboxDemo extends LitElement {
  static get properties() {
    return {
      checked: { type: Boolean, attribute: false, reflect: true },
      value: { type: String, attribute: false, reflect: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }
    `;
  }

  render() {
    return html`
    <mv-checkbox
      .value="Test value"
      .checked="${!!this.checked}"
      @click-checkbox="${this.handleClickCheckbox}"
      label="${this["checkbox-column-label"]}"
    > </mv-checkbox>
    <pre>value: ${value}</pre>
    `;
  }

  handleClickCheckbox(event) {
    const { detail: { value, checked } } = event;
    this.value = value;
    this.checked = checked;
  }
}

customElements.define("mv-checkbox-demo", MvCheckboxDemo);
