module.exports = {
  env: {
    node: true,
  },
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "standard-with-typescript",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    project: ["tsconfig.json"],
  },
  plugins: ["vue"],
  rules: {
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/no-absolute-path": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
};
