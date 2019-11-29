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

      .container {
        display: flex;
        align-items: center;
        justify-content: center;        
        width: 100%;
      }

      .value {
        padding: 3px 10px;
        margin-left: 20px;
        font-size: 16px;
        color: #DF013A;
        background-color: #F8E0E0;
        line-height: 18px;
      }

      .value.checked{
        color: #088A29;
        background-color: #CEF6CE;
      }
    `;
  }

  render() {
    return html`
    <div class="container">
      <mv-checkbox
        .value="${{ isChecked: !this.checked }}"
        .checked="${!!this.checked}"
        @click-checkbox="${this.handleClickCheckbox}"
        label="Checked?"
      > </mv-checkbox>
      <div class="value${this.checked ? " checked" : ""}">${this.value}</div>
    </div>
    `;
  }

  constructor() {
    super();
    this.value = "NO";
    this.checked = false;
  }

  handleClickCheckbox(event) {
    const { detail: { value, checked } } = event;
    this.value = value.isChecked ? "YES" : "NO";
    this.checked = checked;
  }
}

customElements.define("mv-checkbox-demo", MvCheckboxDemo);
