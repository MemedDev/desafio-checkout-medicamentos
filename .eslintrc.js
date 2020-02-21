module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "plugin:react/recommended",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "eslint-plugin-import"],
  rules: {
    "no-shadow": [2, { allow: ["done"] }],
    "import/order": [
      "error",
      {
        groups: [
          ["external", "builtin"],
          ["parent", "sibling", "index"],
          "internal"
        ]
      }
    ]
  }
};
