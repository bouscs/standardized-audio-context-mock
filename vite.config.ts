import { defineConfig, loadEnv } from "vite";
import dts from "vite-plugin-dts";
import { exec } from "child_process";

export default defineConfig(async (config) => {
  process.env = { ...process.env, ...loadEnv(config.mode, process.cwd()) };
  return {
    base: "./",
    plugins: [
      dts({
        tsconfigPath: "./tsconfig.json",

        afterBuild: async () => {
          await exec("npx tsc-alias -p packages/app/tsconfig.json");
        },
      }),
    ],
    build: {
      chunkSizeWarningLimit: 5000,
      outDir: "dist",
      target: "es6",
      emptyOutDir: true,

      lib: {
        entry: "./src/module.ts",
        fileName: "index",
        formats: ["es"],
      },
      minify: true,
    },
  };
});
