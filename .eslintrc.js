module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  plugins: ["prettier"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module"
  },
  rules: {
    "no-undef": "false",
    "prettier/prettier": "error"
  }
}
