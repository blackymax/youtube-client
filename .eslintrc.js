module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: ["tsconfig.*?.json"],
        createDefaultProgram: true,
      },
      extends: [
        "plugin:@angular-eslint/recommended",
        // AirBnB Styleguide rules
        "airbnb-typescript/base",
      ],
      rules: {
        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": ["error", "never"],
        "import/prefer-default-export": "off",
        "linebreak-style": ["error", "windows"]
      }
    },
    {
      files: ["*.component.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {
        "max-len": ["error", { code: 140 }],
      },
    },
    {
      files: ["*.component.ts"],
      extends: ["plugin:@angular-eslint/template/process-inline-templates"],
    },
  ],
};
