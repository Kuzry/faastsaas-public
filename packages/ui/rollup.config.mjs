import typescript from "rollup-plugin-typescript2";
import preserveDirectives from "rollup-plugin-preserve-directives";

export default [
  // {
  //   input: "src/index.ts",
  //   output: [
  //     {
  //       file: "./dist/index.esm.js",
  //       format: "esm",
  //       exports: "named",
  //     },
  //   ],
  //   plugins: [typescript()],
  // },
  // {
  //   input: "src/form.ts",
  //   output: [
  //     {
  //       file: "./dist/form.esm.js",
  //       format: "esm",
  //       exports: "named",
  //     },
  //   ],
  //   plugins: [typescript()],
  // },
  {
    input: "src/layout.ts",
    output: [
      {
        dir: "./dist",
        format: "esm",
        preserveModules: true,
        entryFileNames: "[name].mjs",
      },
    ],
    plugins: [typescript(), preserveDirectives()],
  },
];
