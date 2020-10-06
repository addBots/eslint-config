module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier", // disables rules that conflict with prettier
  ],
  plugins: ["@typescript-eslint", "react-hooks"],
  rules: {
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "ignore",
        exports: "ignore",
        functions: "ignore",
      },
    ],
    "no-duplicate-imports": [
      "error",
      {
        includeExports: true,
      },
    ],
    "no-unused-vars": 0, // disable because @typescript-eslint/no-unused-vars does the job
    "@typescript-eslint/no-unused-vars": 2,
    "no-undef": 0,
    "no-extra-parens": 0, // disable unnecessary parentheses
    "no-import-assign": 2, // disallow assigning to imported bindings
    "no-useless-escape": 0, // disable error on unnecessary escape usage in regex
    "no-unreachable": 0,
    "no-dupe-class-members": 0,
    "require-atomic-updates": 0,
    "no-inner-declarations": 0,

    // react specific rules
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/no-find-dom-node": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
