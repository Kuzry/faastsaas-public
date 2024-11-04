import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import storybook from "eslint-plugin-storybook";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  ...storybook.configs["flat/recommended"],
  {
    rules: {
      "no-console": "error",
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
    },
    ignores: ["!.storybook"],
  },
];
