import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    languageOptions: { 
      globals: globals.node 
    },
    rules: {
      semi: ["error", "always"], 
      indent: ["error", 2],    
      "brace-style": ["error", "1tbs", { allowSingleLine: false }],
      "object-curly-newline": ["error", {
        ObjectExpression: { multiline: true, minProperties: 2 },
        ObjectPattern: { multiline: true },
        ImportDeclaration: { multiline: true, minProperties: 3 },
        ExportDeclaration: { multiline: true, minProperties: 3 }
      }],
      "object-property-newline": ["error", { allowAllPropertiesOnSameLine: false }],
      "array-bracket-newline": ["error", { multiline: true, minItems: 2 }],
      "array-element-newline": ["error", "always"],
      "max-statements-per-line": ["error", { max: 1 }]
    } 
  }
];
