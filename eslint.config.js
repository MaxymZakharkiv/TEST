import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import i18next from "eslint-plugin-i18next";
import react from "eslint-plugin-react";

export default defineConfig([
  globalIgnores(["dist"]),
  i18next.configs["flat/recommended"],
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    plugins: {
      react,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      // 1) Текст у JSX-дітях (опціонально):
      "react/jsx-no-literals": ["error"],

      // 2) i18next — дозволяє ловити прості кейси та діти JSX:
      "i18next/no-literal-string": [
        "error",
        {
          markupOnly: false,
          onlyAttribute: ["placeholder", "label", "title", "aria-label", "alt"],
          ignoreAttribute: ["id", "key", "data-testid", "className", "type"],
          validateTemplate: true,
        },
      ],

      "no-restricted-syntax": [
        "error",
        {
          selector:
            'JSXAttribute[name.name=/^(placeholder|label|title|aria-label|alt)$/][value.type="Literal"]',
          message: "Строка в атрибуті має бути з i18n: використай t('key').",
        },
        {
          selector:
            "JSXAttribute[name.name=/^(placeholder|label|title|aria-label|alt)$/] > JSXExpressionContainer > Literal",
          message: "Строка в атрибуті має бути з i18n: використай t('key').",
        },
      ],

      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
    },
    settings: { react: { version: "detect" } },
  },

  // Вимкнення для тестів/локалей (за потреби)
  {
    files: [
      "**/*.test.*",
      "**/*.spec.*",
      "public/locales/**/*",
      "src/locales/**/*",
    ],
    rules: {
      "react/jsx-no-literals": "off",
      "i18next/no-literal-string": "off",
      "no-restricted-syntax": "off",
    },
  },
]);
