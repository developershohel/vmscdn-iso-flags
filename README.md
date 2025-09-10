Perfect! Here’s a **fully updated `README.md`** with your **new utility functions** included and examples for **JavaScript, TypeScript, React, Vue, and plain HTML**:

---

````markdown
# vmscdn-iso-flags

[![npm version](https://img.shields.io/npm/v/vmscdn-iso-flags)](https://www.npmjs.com/package/vmscdn-iso-flags)
[![License](https://img.shields.io/npm/l/vmscdn-iso-flags)](https://github.com/developershohel/vmscdn-iso-flags/blob/main/LICENSE)

ISO country flags and names with inline SVG support.  
Use it in **JavaScript, TypeScript, React, Vue, or plain HTML projects**.

---

## Installation

```bash
npm install vmscdn-iso-flags
````

Or with Yarn:

```bash
yarn add vmscdn-iso-flags
```

---

## Usage

### 1. JavaScript (CommonJS)

```js
const { getFlag, getCountryName, getISOByCountryName, getCountryInfo, getAllCountries, Flags, countries } = require('vmscdn-iso-flags');

// Get inline SVG flag
console.log(getFlag('bd')); 

// Get flag as file path
console.log(getFlag('us', { type: 'file' })); 

// Get country name
console.log(getCountryName('fr')); // 'France'

// Get ISO by country name
console.log(getISOByCountryName('Bangladesh')); // 'BD'

// Get full country info
console.log(getCountryInfo('bd')); 
/*
{
  name: 'Bangladesh',
  iso: 'BD',
  flag: '<svg>...</svg>'
}
*/

// Get all countries
console.log(getAllCountries());
```

---

### 2. TypeScript / ES Modules

```ts
import { getFlag, getCountryName, getISOByCountryName, getCountryInfo, getAllCountries, Flags, countries } from 'vmscdn-iso-flags';

const bdFlag: string = getFlag('bd');
const usFile: string | undefined = getFlag('us', { type: 'file' });
const frName: string | undefined = getCountryName('fr');
const bdISO: string | undefined = getISOByCountryName('Bangladesh');
const bdInfo = getCountryInfo('bd');
const allCountries = getAllCountries();
```

---

### 3. React

```tsx
import React from 'react';
import { getFlag, getCountryName, getCountryInfo } from 'vmscdn-iso-flags';

interface FlagProps {
  code: string;
}

const Flag: React.FC<FlagProps> = ({ code }) => {
  const flag = getFlag(code);
  return <span dangerouslySetInnerHTML={{ __html: flag || '' }} />;
};

export default function App() {
  const bdInfo = getCountryInfo('bd');

  return (
    <div>
      <Flag code="bd" />
      <p>{getCountryName('us')}</p>
      <p>{bdInfo?.name} - {bdInfo?.iso}</p>
    </div>
  );
}
```

---

### 4. Vue 3

```vue
<template>
  <div v-html="bdFlag"></div>
  <p>{{ usName }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getFlag, getCountryName } from 'vmscdn-iso-flags';

export default defineComponent({
  setup() {
    const bdFlag = getFlag('bd'); // Inline SVG
    const usName = getCountryName('us'); // 'United States'
    return { bdFlag, usName };
  }
});
</script>
```

---

### 5. Plain HTML / JavaScript

```html
<!DOCTYPE html>
<html>
<head>
  <title>Country Flags</title>
</head>
<body>
  <div id="flags"></div>
  <div id="name"></div>

  <script type="module">
    import { getFlag, getCountryName } from 'https://cdn.jsdelivr.net/npm/vmscdn-iso-flags/dist/index.esm.js';

    const flagsContainer = document.getElementById('flags');
    const nameContainer = document.getElementById('name');

    flagsContainer.innerHTML = getFlag('bd'); // Inline SVG
    nameContainer.textContent = getCountryName('us'); // 'United States'
  </script>
</body>
</html>
```

---

## API

### `getFlag(iso: string, options?: FlagOptions): string | undefined`

Get a country flag (inline SVG or file path) or country name.

**Options:**

| Option   | Type      | Default  | Description                         |                                                  |
| -------- | --------- | -------- | ----------------------------------- | ------------------------------------------------ |
| `type`   | \`'code'  | 'file'\` | `'code'`                            | Return inline SVG (`code`) or file path (`file`) |
| `isName` | `boolean` | `false`  | Return country name instead of flag |                                                  |

---

### `getCountryName(iso: string): string | undefined`

Get the country name by ISO code.

### `getISOByCountryName(name: string): string | undefined`

Get ISO code by country name (case-insensitive).

### `getCountryInfo(iso: string, options?: FlagOptions): CountryInfo | undefined`

Return an object `{ name, iso, flag }`.

### `getAllCountries(options?: FlagOptions): CountryInfo[]`

Return an array of all countries with name, ISO code, and flag.

---

### Exports

* `getFlag`
* `getCountryName`
* `getISOByCountryName`
* `getCountryInfo`
* `getAllCountries`
* `Flags` → Object of all inline SVGs
* `countries` → Object of all country names

---

## License

This project is licensed under the [GNU Lesser General Public License v3.0](https://choosealicense.com/licenses/lgpl-3.0/) - see the [LICENSE](./LICENSE) file for details.


---

✅ This version:

- Covers **all major platforms**: JS, TS, React, Vue, HTML  
- Shows **new utility functions** like `getCountryName`, `getISOByCountryName`, `getCountryInfo`, `getAllCountries`  
- Is ready to **publish to GitHub and npm**  

---

If you want, I can **also provide a `flags.ts` template** that includes all **inline SVG loading** in a compact single-line format ready for this package, so your build works without TypeScript errors.  

Do you want me to do that next?
```
