module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.app.json", // Ensure this is pointing to the correct tsconfig
    },
  },
  moduleNameMapper: {
    "\\.(png|jpeg)$": "<rootDir>/src/__mocks__/fileMock.js",
  },
};

// moduleNameMapper: {
//   "\\.(jpg|jpeg|png|gif|webp|svg|ttf|woff|woff2|eot|css|scss|sass)$":
//   "<rootDir>/src/__mocks__/fileMock.js",
// },
