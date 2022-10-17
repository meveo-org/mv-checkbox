import { LitElement, html, css } from "lit";

export class MvCheckbox extends LitElement {
  static get properties() {
    return {
      value: { type: Object, attribute: true },
      checked: { type: Boolean, attribute: true },
      disabled: { type: Boolean, attribute: true },
      label: { type: String, attribute: true },
      // theme is either "light" or "dark", default: "light"
      theme: { type: String, attribute: true },
    };
  }

  static get styles() {
    return css`
      :host {
        --checked-content: var(--mv-checkbox-checked-content, "\u2713");
        --checked-font-size: var(--mv-checkbox-checked-font-size, 18px);
        --border-dark-color: var(--mv-checkbox-border-dark-color, #ffffff);
        --border-color: var(--mv-checkbox-border-color, #4e686d);
        --checkbox-background: var(--mv-checkbox-background,#FFFFFF);
        --checkbox-width: var(--mv-checkbox-label-width, 12px);
        --checkbox-box-shadow-hover: var(--mv-checkbox-box-shadow-hover ,none);
        --checkbox-box-shadow: var(--mv-checkbox-box-shadow, none);
        --input-border-radius: var(--mv-checkbox-border-radius, 3px);
        --checkbox-border: var(--mv-checkbox-border, 1px solid var(--border-color));
        --checkbox-background: var(--mv-checkbox-background);
        --checkbox-checked-border: var(--mv-checkbox-checked-border);
        --checkbox-checked-background: var(--mv-checkbox-checked-background);
        --checkbox-checked-color: var(--mv-checkbox-checked-color);
      }
      label {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 16px);
        display: flex;
        align-items: center;
        width: var(--mv-checkbox-label-width, auto);
        --label-color: var(--mv-checkbox-label-color, #818181);
        --label-dark-color: var(--mv-checkbox-label-dark-color, #ffffff);
        --checked-background: var(--mv-checkbox-checked-background);
        --checked-label-background: var(--mv-checkbox-checked-label-background, var(--checked-background))
        --checked-dark-background: var(
          --mv-checkbox-checked-dark-background,
          #ffffff
        );
        --hover-border-color: var(--mv-checkbox-hover-border-color, #1d9bc9);
        --hover-border-dark-color: var(
          --mv-checkbox-hover-border-dark-color,
          #ffffff
        );
        --checked-dark-background: var(
          --mv-checkbox-checked-dark-background,
          #ffffff
        );
      }
      
      span {
        display: flex;
        align-items: center;
      }

      span::before {
        display: inline-block;
      }

      label,
      label * {
        cursor: pointer;
        border-radius: var(--checkbox-border-radius);
        width: var(--checkbox-width); 
      }

      input[checked] + span {
        background-color: var(--checked-label-background);
        border-radius: var(--input-border-radius);
      }

      input[type="checkbox"] {
        opacity: 0;
        position: absolute;
        width: var(--checkbox-width);
      }

      input[type="checkbox"]:disabled {
        cursor: default;
      }

      input[type="checkbox"] + span::before {
        content: "\u2003";
        font-weight: bolder;
        font-size: 16px;
        width: 14px;
        height: 14px;
        margin: 0 4px 0 0;
        line-height: 14px;
        text-align: center;
        border-radius: var(--input-border-radius)
      }

      input[type="checkbox"]:checked + span::before {
        //content: "\u2713";
        content: var(--checked-content);
        font-size: var(--checked-font-size)
      }

      input[type="checkbox"] + span.light::before {
        border: var(--checkbox-border);
        background-color: var(--checkbox-background);
        box-shadow: var(--checkbox-box-shadow, none);
      }

      label:hover input[type="checkbox"] + span.light::before {
        border: 1px solid var(--hover-border-color);
        box-shadow: var(--checkbox-box-shadow-hover, inset 0 0 5 0 rgba(29, 155, 201, 0.3))
      }

      input[type="checkbox"]:checked + span.light::before {
        border: var(--checkbox-checked-border, 1px solid var(--checked-background));
        background-color: var(--checkbox-checked-background, var(--checked-background));
        color: var(--checkbox-checked-color, #FFFFFF);
      }

      label:hover input[type="checkbox"]:disabled + span.light,
      input[type="checkbox"]:disabled + span.light {
        color: #c7c7c7;
        cursor: default;
      }

      label:hover input[type="checkbox"]:disabled + span.light::before,
      input[type="checkbox"]:disabled + span.light::before {
        border: 1px solid #a8b5b7;
        color: #c7c7c7;
        cursor: default;
      }

      input[type="checkbox"] + span.dark::before {
        border: 1px solid var(--border-dark-color);
      }

      label:hover input[type="checkbox"] + span.dark::before {
        border: 1px solid var(--hover-border-dark-color);
        background-color: #656c75;
        box-shadow: var(--checkbox-box-shadow, none);
      }

      input[type="checkbox"]:checked + span.dark::before {
        border: var(--checkbox-checked-border ,1px solid var(--checked-dark-background));
        background-color: var(--checkbox-checked-background, var(--checked-dark-background));
        color: var(--checkbox-checked-color ,#3f4753);
      }

      label:hover input[type="checkbox"]:disabled + span.dark::before,
      input[type="checkbox"]:disabled + span.dark::before {
        border: 1px solid #a8b5b7;
        color: #c7c7c7;
        cursor: default;
      }

      span.light {
        color: var(--label-color);
      }

      span.dark {
        color: var(--label-dark-color);
      }

    `;
  }

  constructor() {
    super();
    this.label = "";
    this.checked = false;
    this.disabled = false;
    this.theme = "light";
  }

  render() {
    const { checked, disabled, label, handleClick } = this;
    return html`
      <label class="${this.theme}">
        ${checked
          ? html`<input
              type="checkbox"
              @click="${handleClick}"
              ?disabled="${disabled}"
              checked
            />`
          : html`<input
              type="checkbox"
              @click="${handleClick}"
              ?disabled="${disabled}"
            />`}
        <span class="${this.theme}">${label}</span>
      </label>
    `;
  }

  handleClick(originalEvent) {
    originalEvent.stopPropagation();
    const { value, checked } = this;
    this.dispatchEvent(
      new CustomEvent("click-checkbox", {
        detail: { value, checked: !checked, originalEvent },
      })
    );
  }
}

customElements.define("mv-checkbox", MvCheckbox);