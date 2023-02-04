const { eslint } = require("real-config/api");

const consistentImport = eslint.rules["misc/consistent-import"];

// eslint-disable-next-line misc/real-config/eslintrc/no-temp -- Wait for real-config update
module.exports = {
  rules: {
    "import/no-unassigned-import": [
      "warn",
      {
        allow: [
          "**/*.css",
          "**/*.sass",
          "**/*.scss",
          "@testing-library/jest-dom",
          "jest-extended",
          "reflect-metadata"
        ]
      }
    ],
    "misc/consistent-import": [
      "warn",
      {
        sources: [
          {
            _id: "react",
            autoImport: true,
            localName: "React",
            source: "react"
          },
          {
            _id: "react-dom/client",
            autoImport: true,
            localName: "ReactDOM",
            source: "react-dom/client"
          },
          ...consistentImport.sources
        ]
      }
    ],
    "misc/no-internal-modules": [
      "warn",
      {
        allow: [
          "./src/test-utils",
          "@typescript-eslint/utils/dist/ts-eslint",
          "@vue/test-utils/dist/interfaces/wrapperLike",
          "@vue/test-utils/dist/types",
          "date-fns/locale/*",
          "flag-icon-css/flags/*/*.svg",
          "jest-extended/all",
          "quasar/wrappers",
          "react-dom/client",
          "real-config/api",
          "real-facades/dist/test-utils",
          "real-fns/dist/test-utils",
          "real-service-providers/dist/test-utils",
          "ts-toolbelt/**",
          "typeface-roboto-multilang/*.css"
        ]
      }
    ]
  },
  overrides: [
    {
      files: "./src/setupTests.ts",
      rules: { "misc/consistent-filename": "off" }
    }
  ]
};
