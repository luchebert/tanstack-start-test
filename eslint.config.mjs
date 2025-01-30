import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],

    languageOptions: {
      globals: globals.browser,
    },
    plugins: ["prettier"],
    extends: [
      pluginJs.configs.recommended,
      ...tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
      "plugin:prettier/recommended",
      eslintConfigPrettier,
    ],
    rules: {
      "object-curly-spacing": ["error", "always"],
      "key-spacing": ["error", { beforeColon: false, afterColon: true }],
      "comma-dangle": ["error", "always-multiline"],
      "prettier/prettier": ["error"],
    },
  },
];
