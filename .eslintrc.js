module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": ["standard-with-typescript", "plugin:react/recommended", "plugin:storybook/recommended"],
  "overrides": [{
    "env": {
      "node": true
    },
    "files": [".eslintrc.{js,cjs}"],
    "parserOptions": {
      "sourceType": "script"
    }
  }],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "parser": '@typescript-eslint/parser',
    "project": 'tsconfig.json',
    "tsconfigRootDir": __dirname
  },
  "plugins": ["react"],
  "rules": {
    "@typescript-eslint/indent": [2, 4],
    "indent": ["error", 4],
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/prefer-nullish-coalescing": 0,
    "@typescript-eslint/strict-boolean-expressions": 0,
    "@typescript-eslint/no-floating-promises": 0,
    "@typescript-eslint/no-misused-promises": 0,
    "n/handle-callback-err": 0,
    "@typescript-eslint/no-throw-literal": 0,
    "@typescript-eslint/quotes": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/prefer-ts-expect-error": 0
  }
};