import { LitElement, html, css } from "lit-element";
import "./mv-checkbox.js";
import "mv-container";

export class MvCheckboxDemo extends LitElement {
  static get properties() {
    return {
      checked: { type: Boolean, attribute: false, reflect: true },
      value: { type: String, attribute: false, reflect: true },
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
      
      fieldset > label, label > input {
        cursor: pointer;
      }
      
      fieldset {
        width: 120px;
        margin-left: 10px;
        border:2px solid red;
        -moz-border-radius:8px;
        -webkit-border-radius:8px;	
        border-radius:8px;
        color: #818181;
      }
      
      legend {
        font-weight: 500;
        color: red;
      }
    `;
  }

  constructor() {
    super();
    this.value = "NO";
    this.checked = false;
    this.theme = "light";
  }

  render() {
    return html`
      <fieldset>
        <legend>Theme</legend>
        <label><input type="radio" name="theme" value="light" checked @change="${this.radioChange}" />Light</label>
        <label><input type="radio" name="theme" value="dark" @change="${this.radioChange}" />Dark</label>
      </fieldset>
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

  radioChange = originalEvent => {
    const { target: { value } } = originalEvent;
    if (value === "light") {
      this.theme = "light";
    } else {
      this.theme = "dark";
    }
  };
}

customElements.define("mv-checkbox-demo", MvCheckboxDemo);
