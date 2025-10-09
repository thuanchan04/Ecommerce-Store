const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      // Variables and functions must have camelCase
      "camelcase": ["error", { properties: "always" }],

      // Class, Interface, Enum must have PascalCase
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "class",
          format: ["PascalCase"],
        },
        {
          selector: "interface",
          format: ["PascalCase"],
        },
        {
          selector: "enum",
          format: ["PascalCase"],
        },
        {
          selector: "variable",
          modifiers: ["const", "global"],
          format: ["UPPER_CASE"],
        },
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE"],
        },

        {
          selector: "function",
          format: ["camelCase"],
        }
      ],

      // Angular selector rules
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
