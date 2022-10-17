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

        --label-color: var(--mv-checkbox-label-color, #818181);
        --label-dark-color: var(--mv-checkbox-label-dark-color, #ffffff);

        --hover-border-color: var(--mv-checkbox-hover-border-color, #1d9bc9);
        --hover-border-dark-color: var(
          --mv-checkbox-hover-border-dark-color,
          #ffffff
        );
        --checked-dark-background: var(
          --mv-checkbox-checked-dark-background,
          #ffffff
        );
        --border-dark-color: var(--mv-checkbox-border-dark-color, #ffffff);
        --border-color: var(--mv-checkbox-border-color, #4e686d);
        --hover-border-lightV2-color: #194660;
        --border-checked-lightV2-color: #194660;
        --checked-lightV2-background: var(--mv-checkbox-lightV2-checked-background, #ffffff);
        --border-lightV2-color: var(--mv-checkbox-border-lightV2-color, #328cc0);
      }
      
      .light {
        --checkbox-background: var(--mv-checkbox-light-background, #FFFFFF);
        --checked-background: var(--mv-checkbox-checked-background, #0792c5);
      }

      .lightV2 {
        --checkbox-background: #FFFFFF;
        --checkbox-border-radius: 15px !important;
        --checkbox-width: 12px;
      }

      .dark {
        --checkbox-background: var(--mv-checkbox-dark-background);
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
        /* border-radius: var(--checkbox-border-radius);
        width: var(--checkbox-width); */
      }

      input[checked] + span {
        background-color: var(--checked-background);
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
        font-size: 16px;
        width: 14px;
        height: 14px;
        margin: 0 4px 0 0;
        line-height: 14px;
        text-align: center;
        border-radius: 50%;
      }

      input[type="checkbox"]:checked + span::before {
        content: "\u2713";
        font-size: 18px;
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

      input[type="checkbox"] + span.lightV2::before {
        border: 1px solid var(--border-lightV2-color);
        background-color: #ffffff;
        box-shadow: inset 0px 1.8928px 1.8928px rgba(0, 0, 0, 0.25);
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

      input[type="checkbox"]:checked + span.lightV2::before {
        border: 1px solid var(--border-checked-lightV2-color);
        background-color: var(--checked-lightV2-background);
        color: #66CC44;
      }

      label:hover input[type="checkbox"]:disabled + span.dark,
      input[type="checkbox"]:disabled + span.dark {
        color: #c7c7c7;
        cursor: default;
      }

      label:hover input[type="checkbox"]:disabled + span.lightV2,
      input[type="checkbox"]:disabled + span.lightV2 {
        color: #c7c7c7;
        cursor: default;
      }

      label:hover input[type="checkbox"]:disabled + span.dark::before,
      input[type="checkbox"]:disabled + span.dark::before {
        border: 1px solid #a8b5b7;
        color: #c7c7c7;
        cursor: default;
      }

      label:hover input[type="checkbox"]:disabled + span.lightV2::before,
      input[type="checkbox"]:disabled + span.lightV2::before {
        border: 1px solid grey;
        color: #c7c7c7;
        cursor: default;
      }

      span.light {
        color: var(--label-color);
      }

      span.dark {
        color: var(--label-dark-color);
      }

      span.lightV2 {
        color: var(--label-color)
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