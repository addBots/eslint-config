# @addbots/eslint-config

Default eslint config for all addbots public and private projects.

## Usage

`npm install --save-dev @addbots/eslint-config`

With peer dependecies

`npm install --save-dev @addbots/eslint-config @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks`

Example Usage (`.eslintrc.js`):

```javascript
const addBotsConfig = require("@addbots/eslint-config");

module.exports = {
  ...addBotsConfig,
  parserOptions: {
    ...defaultConfig.parserOptions,
    project: "tsconfig.json", // is required for @typescript-eslint/no-floating-promises rule
  },
};
```

## License

This project is licensed under the [MIT](LICENSE) license.
