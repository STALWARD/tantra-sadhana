import { defineConfig, globalIgnores } from "eslint/config";
import next from "eslint-config-next"; // Combines core-web-vitals and typescript

const eslintConfig = defineConfig([
  ...next, // Use the combined 'next' config
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
