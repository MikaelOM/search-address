// eslint-disable-next-line no-undef
module.export = {
  present: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.ts'],
  // moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  // testPathIgnorePatterns: ["/node_modules/", "\\.css$"]
}