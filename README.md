# mv-checkbox

MvCheckbox is a Meveo checkbox component (based on lit-element) that renders a checkbox input.

## Features

- Simple interface
- Dispatches a custom event when checkbox is clicked

## Quick Start

To experiment with the MvCheckbox component.

1. Clone this repo.

2. Serve the project from the root directory with some http server (best served with meveo itself)

3. Update the checkbox demo component in demo.js file

## Sample usage

```html
<mv-checkbox
  .value="${{ isChecked: !this.checked }}"       // value can be any object
  .checked="${!!this.checked}"                   // checked is a boolean that determines whether the checkbox is selected or not
  @click-checkbox="${this.handleClickCheckbox}"  // custom event dispatched when the checkbox is clicked
  label="Checked?"                               // string label for the checkbox
></mv-checkbox>
```

You can also check this [demo](https://manaty.net/mv-checkbox/)
