module.exports = {
  collectCoverageFrom: ["**/*.{js,jsx}", "!**/node_modules/**"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleDirectories: ["node_modules", "utils"],
};
