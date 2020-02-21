import { LitElement, html, css } from "lit-element";
import "./mv-checkbox.js";
import "mv-container";
import "mv-font-awesome";

export class MvCheckboxDemo extends LitElement {
  static get properties() {
    return {
      checked: { type: Boolean, attribute: false, reflect: true },
      value: { type: String, attribute: false, reflect: true },
      open: { type: Boolean, attribute: true },
      theme: { type: String, attribute: true }
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
        width: 50px;
      }

      .value.checked {
        color: #088A29;
        background-color: #CEF6CE;
      }
      
      mv-container div {
        display: flex;
        align-items: center;
        justify-content: center;        
        width: 100%;
      }
      
      mv-fa[icon="lightbulb"] {
        font-size: 50px;
        cursor: pointer;
        margin: 20px;
      }
      
      .theme {
        display: flex;
        justify-content: flex-start;
      }
    `;
  }

  constructor() {
    super();
    this.value = "NO";
    this.checked = false;
    this.open = true;
    this.theme = "light";
  }

  render() {
    const iconColor = `color: ${this.open ? "yellow" : ""}`;
    return html`
      <div class="theme">
        <mv-fa icon="lightbulb" style="${iconColor}" @click=${this.toggleLightBulb}></mv-fa>
      </div>
      <mv-container .theme="${this.theme}">
        <div>
          <mv-checkbox
            .value="${{ isChecked: !this.checked }}"
            .checked="${!!this.checked}"
            @click-checkbox="${this.handleClickCheckbox}"
            label="Checked?"
            .theme="${this.theme}"
          > </mv-checkbox>
          <div class="value${this.checked ? " checked" : ""}">${this.value}</div>
        </div>
      </mv-container>
    `;
  }

  handleClickCheckbox(event) {
    const { detail: { value, checked } } = event;
    this.value = value.isChecked ? "YES" : "NO";
    this.checked = checked;
  }

  toggleLightBulb = () => {
    this.open = !this.open;
    if (this.open) {
      this.theme = "light";
    } else {
      this.theme = "dark";
    }
  };
}

customElements.define("mv-checkbox-demo", MvCheckboxDemo);
