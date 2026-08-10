import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig: Config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
};

const nextJestConfig = createJestConfig(customJestConfig);

// next/jest concatenates its own transformIgnorePatterns with any we pass in,
// and jest ignores a node_modules file if ANY pattern matches it - so a plain
// addition can't un-ignore next-intl/use-intl (they still match next/jest's
// broad default pattern). Override the merged array instead of extending it.
const finalJestConfig = async () => {
  const config = await nextJestConfig();
  return {
    ...config,
    transformIgnorePatterns: ["/node_modules/(?!next-intl|use-intl)/"],
  };
};

export default finalJestConfig;
