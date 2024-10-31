import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "./dist/index.esm.js",
        format: "esm",
        exports: "named",
      },
    ],
    external: ["postgres"],
    plugins: [typescript()],
  },
];
