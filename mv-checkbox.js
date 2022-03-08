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
      label {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 16px);
        display: flex;
        align-items: center;
        width: var(--mv-checkbox-label-width, auto);
        --border-color: var(--mv-checkbox-border-color, #4e686d);
        --border-dark-color: var(--mv-checkbox-border-dark-color, #ffffff);
        --label-color: var(--mv-checkbox-label-color, #818181);
        --label-dark-color: var(--mv-checkbox-label-dark-color, #ffffff);
        --checked-background: var(--mv-checkbox-checked-background, #0792c5);
        --checked-dark-background: var(
          --mv-checkbox-checked-dark-background,
          #ffffff
        );
        --hover-border-color: var(--mv-checkbox-hover-border-color, #1d9bc9);
        --hover-border-dark-color: var(
          --mv-checkbox-hover-border-dark-color,
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
      }

      input[type="checkbox"] {
        opacity: 0;
        position: absolute;
      }

      input[type="checkbox"]:disabled {
        cursor: default;
      }

      input[type="checkbox"] + span::before {
        content: "\u2003";
        font-weight: bolder;
        font-size: 10px;
        width: 12px;
        height: 12px;
        margin: 0 4px 0 0;
        line-height: 12px;
        text-align: center;
        border-radius: 3px;
      }

      input[type="checkbox"]:checked + span::before {
        content: "\u2713";
      }

      input[type="checkbox"] + span.light::before {
        border: 1px solid var(--border-color);
      }

      label:hover input[type="checkbox"] + span.light::before {
        border: 1px solid var(--hover-border-color);
        box-shadow: inset 0 0 5 0 rgba(29, 155, 201, 0.3);
      }

      input[type="checkbox"]:checked + span.light::before {
        border: 1px solid var(--checked-background);
        background-color: var(--checked-background);
        color: #ffffff;
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
      }

      input[type="checkbox"]:checked + span.dark::before {
        border: 1px solid var(--checked-dark-background);
        background-color: var(--checked-dark-background);
        color: #3f4753;
      }

      label:hover input[type="checkbox"]:disabled + span.dark,
      input[type="checkbox"]:disabled + span.dark {
        color: #c7c7c7;
        cursor: default;
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
      <label>
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
