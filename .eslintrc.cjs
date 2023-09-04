module.exports = {
  // files: ["*.svelte"],
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    "plugin:svelte/recommended",
    'plugin:@typescript-eslint/recommended',
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    parser: {
      // Specify a parser for each lang.
      ts: "@typescript-eslint/parser",
      js: "espree",
      typescript: "@typescript-eslint/parser",
    },
    project: "./tsconfig.json",
    extraFileExtensions: [".svelte"], // This is a required setting in `@typescript-eslint/parser` v4.24.0.
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
}