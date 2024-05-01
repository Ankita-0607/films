module.exports = {
  preset: "jest-preset-angular",
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/src/setupJest.ts"],
  testMatch: ["**/+(*.)+(spec).+(ts)"],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!@ngrx)"],
  collectCoverage: true,
  coverageReporters: ["html"],
};
