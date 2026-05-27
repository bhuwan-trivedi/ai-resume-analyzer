 setup/complete-project-structure
module.exports = {
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.js"],
  collectCoverageFrom: [
    "server/**/*.js",
    "!server/index.js",
    "!node_modules/**"
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  }
};

module.exports = {\n  testEnvironment: "node",\n  testMatch: ["**/tests/**/*.test.js"],\n  collectCoverageFrom: [\n    "server/**/*.js",\n    "!server/index.js",\n    "!node_modules/**",\n  ],\n  coverageThreshold: {\n    global: {\n      branches: 50,\n      functions: 50,\n      lines: 50,\n      statements: 50,\n    },\n  },\n};\n
 main
