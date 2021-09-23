module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: [
        '<rootDir>/node_modules',
        '<rootDir>/.next',
        '<rootDir>/cypress/',
    ],
    moduleDirectories: ['node_modules', 'src'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
};
