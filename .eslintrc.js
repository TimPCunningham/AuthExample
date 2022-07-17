// eslint-disable-next-line no-undef
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "indent": [ "error", 2, { "SwitchCase": 1 } ],
    "quotes": [ "error", "double", { "allowTemplateLiterals": true } ],
    "no-unreachable": ["error"],
    "semi": "off", //This can conflict with @typescript-eslint/semi
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/no-inferrable-types": "off",
    "react/no-unescaped-entities": [ "off" ]
  }
};
